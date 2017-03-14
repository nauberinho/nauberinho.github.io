
let inputtitle = document.getElementById('inputtitle')
let inputauthor = document.getElementById('inputauthor');

let addbtn = document.getElementById('addbook');

let searchbtn = document.getElementById('searchbooks')

let boklista = document.getElementById('lista');

let key = 'PRu3m';

let addfromApi = document.getElementById('addfromAPI');

function removeChildren(parent){
    
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
};
};
    
//------------------------------GET API KEY--------------------------------------
/*function getKey(){

    let req = new XMLHttpRequest();

    req.onreadystatechange = function(event){

        if(req.readyState===4){


            key = JSON.parse(req.responseText)
            console.log(key);
            key = key.key;
            console.log(key);
            getBooks();
            return key;
        }


    };

    let url = "https://www.forverkliga.se/JavaScript/api/crud.php?requestKey";

    req.open('GET', url);
    req.send();
}
*/




//---------------------------------------------------------------------------------

//-------------------FUNCTION INSERT BOOKS-----------------------------------------

function insertBooks(inputtitle1, inputauthor1){
    
    console.log(inputtitle1 + ',' + inputauthor1)
    let booksurl = "https://www.forverkliga.se/JavaScript/api/crud.php?key=" + key + '&op=insert&title=nauber&title=' + inputtitle1 + "&author=" + inputauthor1;

    
    let bookreq = new XMLHttpRequest;
    
    bookreq.onreadystatechange = function(event){
        
        if(bookreq.status===200 && bookreq.readyState===4){
            
            
            let myResponseParsed = JSON.parse(bookreq.responseText);
            
            if(myResponseParsed.status!=='error'){
                
                console.log(myResponseParsed.status)
               
                getBooks()
            }
            
            else if(myResponseParsed.status=='error'){
                
                console.log(myResponseParsed.status)
                insertBooks(inputtitle.value, inputauthor.value);
                
                
            }
  
            
        }
        
    }
    
    bookreq.open('GET', booksurl);
    bookreq.send();
    
    
}

//--------------------------------FUNCTION GET BOOKS-------------------------------------------

let arrayEditableTitle = [];
let arrayEditableAuthor = [];
let arrayId = [];

function getBooks(){
    
    removeChildren(boklista);

    let booksurl = "https://www.forverkliga.se/JavaScript/api/crud.php?key=" + key + "&op=select"; //+ searchbox.value;
    
    let bookreq = new XMLHttpRequest;
    
    bookreq.onreadystatechange = function(event){
        
        if(bookreq.readyState===4 && bookreq.readyState===4){
            
            
            let myResponseParsed = JSON.parse(bookreq.responseText);
            
            if(myResponseParsed.status!=='error'){
                
                if(myResponseParsed.data.author==undefined){
                for(i=0;i<myResponseParsed.data.length;i++){
                
                let li = document.createElement('LI');
                li.className = 'books-li';
                let titleAndAuthor = document.createElement('DIV');
                titleAndAuthor.innerHTML = myResponseParsed.data[i].title + ', ' + myResponseParsed.data[i].author;
                titleAndAuthor.id = myResponseParsed.data[i].id;
                titleAndAuthor.className = 'titleAndAuthor';
                li.appendChild(titleAndAuthor);
                let remove = document.createElement('I');
                remove.innerHTML = 'delete_forever';
                remove.className='material-icons';
                remove.id=myResponseParsed.data[i].id;
                li.appendChild(remove)
                remove.addEventListener('click', deleteBooks)
                titleAndAuthor.addEventListener('click', editBooks);
                boklista.appendChild(li);
        
                }
              
                console.log(myResponseParsed);
                    
                }
                
            }
            
            else if(myResponseParsed.status=='error'){
                
                getBooks();
                
            }
            
        }
        
    }
    
    bookreq.open('GET', booksurl);
    bookreq.send();
    
    
}

addbtn.addEventListener('click', function(){

    insertBooks(inputtitle.value, inputauthor.value);
})


searchbtn.addEventListener('click', function(){

    getBooks();
})

addfromApi.addEventListener('click', addFromOtherApi);


function addFromOtherApi(){
    
    let bookValue = document.getElementById('inputotherAPI').value;
    let booksurl = 'https://www.googleapis.com/books/v1/volumes?q=' + bookValue + '&origin=*';
    
    let bookreq = new XMLHttpRequest();
    
    bookreq.onreadystatechange = function(event){
        
        if(bookreq.readyState===4 && bookreq.readyState===4){
            
            console.log(bookreq.responseText);
            let myResponseParsed = JSON.parse(bookreq.responseText);
  
        }
        
    }
    
    bookreq.open('GET', booksurl, true);
    bookreq.send(); 
    
}


function editBooks(event){
    let newInput = document.createElement('input');
    newInput.className = 'new-input';
    console.log(event.target);
    let editText = event.target.innerText;
    event.target.innerHTML = '';
    newInput.value = editText;
    event.target.appendChild(newInput);
    newInput.focus();
    
    
newInput.addEventListener('blur', updateEdit);

    function updateEdit() {
        let thisElement = event.target;
        console.log(thisElement);
        console.log(newInput);
        thisElement.innerText = newInput.value;
        let test = thisElement.innerText.split(',');
        console.log(test);
        console.log(thisElement.id);
        console.log(`https://www.forverkliga.se/JavaScript/api/crud.php?key=${key}&op=update&title=${test[0]}&author=${test[1]}&id=${thisElement.id}`);
        let req = new XMLHttpRequest();
        req.open('POST', `https://www.forverkliga.se/JavaScript/api/crud.php?key=${key}&op=update&title=${test[0]}&author=${test[1]}&id=${thisElement.id}`);
        req.onreadystatechange = function (e) {
            if (req.readyState === 4 && req.status === 200) {
                updateParse = JSON.parse(req.responseText)
                console.log(updateParse);
                if (updateParse.status != 'error') {
                    
                    console.log('Inne i edit med utan fel');
                    
                }
                else {
                    
                    console.log('Inne i edit med med felmeddelande');
                    updateEdit();
                    
                }
                
                getBooks();
            }
        };
        
    req.send();
        
        
        
        
        
        
    };
}


let deleteButton = document.getElementsByClassName('remove')[0];



function deleteBooks() {
    let thisIdToRemove = event.target.id;
    let req = new XMLHttpRequest;
    req.open('GET', `https://www.forverkliga.se/JavaScript/api/crud.php?key=${key}&op=delete&id=${thisIdToRemove}`);
    req.onreadystatechange = function (e) {
        if (req.readyState === 4 && req.status === 200) {
            jsonTextParse = JSON.parse(req.responseText);
            
            
            if(jsonTextParse.status !== 'error'){
                console.log(jsonTextParse);
                console.log('Borta!');
                getBooks();
            }
            
            else {
                deleteBooks();
            }
        
     
            }
    }
    req.send();
}



let divOveraddbookdiv = document.getElementById('divoveraddbook');
let addbookdiv = document.getElementsByClassName('addbookdiv')[0];

let divOveraddbookfromother = document.getElementById('divoveraddfromother');
let addbookfromotherdiv = document.getElementsByClassName('addfromotherdiv')[0]




//getKey()

