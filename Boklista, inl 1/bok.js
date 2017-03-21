let body = document.getElementsByTagName('body')[0];
let inputtitle = document.getElementById('inputtitle')
let inputauthor = document.getElementById('inputauthor');
let addbtn = document.getElementById('addbook');
let searchbtn = document.getElementById('searchbooks')
let boklista = document.getElementById('lista');
let key = 'PRu3m';
let addfromApi = document.getElementById('addfromAPI');

function removeChildren(parent) {
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
function insertBooks(inputtitle1, inputauthor1) {
    console.log(inputtitle1 + ',' + inputauthor1)
    let booksurl = "https://www.forverkliga.se/JavaScript/api/crud.php?key=" + key + '&op=insert&title=nauber&title=' + inputtitle1 + "&author=" + inputauthor1;
    let bookreq = new XMLHttpRequest;
    bookreq.onreadystatechange = function (event) {
        if (bookreq.status === 200 && bookreq.readyState === 4) {
            let myResponseParsed = JSON.parse(bookreq.responseText);
            if (myResponseParsed.status !== 'error') {
                console.log(myResponseParsed.status)
                getBooks()
            }
            else if (myResponseParsed.status == 'error') {
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

function getBooks() {
    removeChildren(boklista);
    let booksurl = "https://www.forverkliga.se/JavaScript/api/crud.php?key=" + key + "&op=select"; //+ searchbox.value;
    let bookreq = new XMLHttpRequest;
    bookreq.onreadystatechange = function (event) {
        if (bookreq.readyState === 4 && bookreq.readyState === 4) {
            let myResponseParsed = JSON.parse(bookreq.responseText);
            if (myResponseParsed.status === 'success') {
                if (myResponseParsed.data !== undefined) {
                    for (i = 0; i < myResponseParsed.data.length; i++) {
                        let id = myResponseParsed.data[i].id;
                        //console.log('New id: ' + id + ', data: ' + myResponseParsed.data + ', obj: ' + myResponseParsed);
                        let li = document.createElement('LI');
                        li.className = 'books-li';
                        let titleAndAuthor = document.createElement('DIV');
                        titleAndAuthor.innerHTML = myResponseParsed.data[i].title + ', ' + myResponseParsed.data[i].author;
                        titleAndAuthor.id = id;
                        titleAndAuthor.className = 'titleAndAuthor';
                        li.appendChild(titleAndAuthor);
                        let remove = document.createElement('I');
                        remove.innerHTML = 'delete_forever';
                        remove.className = 'material-icons';
                        remove.id = id;
                        //console.log('alltid ok? '+myResponseParsed.data[i].id)
                        li.appendChild(remove);
                        remove.addEventListener('click', function(event) {
                            if( !event ) {
                                console.log('event is undefined!');
                            } else 
                                deleteBooks(event);
                        });
                        titleAndAuthor.addEventListener('click', editBooks);
                        boklista.appendChild(li);
                    }
                    console.log(myResponseParsed);
                } else {
                    console.log('serious errorrr')
                }
            }
            else if (myResponseParsed.status == 'error') {
                getBooks();
            }
        }
    }
    bookreq.open('GET', booksurl);
    bookreq.send();
};


addbtn.addEventListener('click', function () {
    insertBooks(inputtitle.value, inputauthor.value);
})
searchbtn.addEventListener('click', function () {
    getBooks();
});
addfromApi.addEventListener('click', addFromOtherApi);

function addFromOtherApi() {
    let bookValue = document.getElementById('inputotherAPI').value;
    let booksurl = 'https://www.googleapis.com/books/v1/volumes?q=' + bookValue + '&origin=*';
    let bookreq = new XMLHttpRequest();
        

    bookreq.onreadystatechange = function (event) {
        
        if (bookreq.readyState === 4 && bookreq.status === 200) {
            let response = bookreq.responseText;
            let myResponseParsed = JSON.parse(response);
            console.log(myResponseParsed.items)
            
            for(var obj in myResponseParsed.items){
                console.log(myResponseParsed.items[obj].volumeInfo.authors, myResponseParsed.items[obj].volumeInfo.title);
            insertBooks(myResponseParsed.items[obj].volumeInfo.title, myResponseParsed.items[obj].volumeInfo.authors)
            
            console.log('myResponseParsed: ' + myResponseParsed)
        }
    }
        
  
}
      bookreq.open('GET', booksurl, true);    
    bookreq.send();
    
};

function editBooks(event) {
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
                    console.log('Inne i edit men utan fel');
                }
                else {
                    console.log('Inne i edit med felmeddelande');
                    updateEdit();
                }
                getBooks();
            }
        };
        req.send();
    };
}

let deleteButton = document.getElementsByClassName('remove')[0];

function deleteBooks(deleteevent) {
    let thisIdToRemove = deleteevent.target.id;
    let req = new XMLHttpRequest;
    let url = `https://www.forverkliga.se/JavaScript/api/crud.php?key=${key}&op=delete&id=${thisIdToRemove}`;
    req.open('GET', url);
    req.onreadystatechange = function (e) {
        if (req.readyState === 4 && req.status === 200) {
            jsonTextParse = JSON.parse(req.responseText);
            if (jsonTextParse.status !== 'error' && thisIdToRemove!==undefined) {
                

                getBooks();
            }
            else {
                console.log('Detta är error: ' + jsonTextParse.status + ', url= '+url);
                deleteBooks(deleteevent);
            }
        }
    }
    req.send();
}
let divoveraddfromother = document.getElementById('divoveraddfromother');
let divoveraddbook = document.getElementById('divoveraddbook');
let divoveraddfromotherclicked = false;
let divoveraddbookclicked = false;

let addfromotherdiv = document.getElementsByClassName('addfromotherdiv')[0];
let addbookdiv = document.getElementsByClassName('addbookdiv')[0];

divoveraddbook.addEventListener('click', function(event){

    scrollUpDivs(event.target)
});

divoveraddfromother.addEventListener('click', function(event){
    console.log('divoveraddfromotherclicked:')
    scrollUpDivs(event.target);
});

function scrollDownDivs(e){

        
         e.style.height='100%';


};


function scrollUpDivs(e){
         e.style.height='0%';
};


    //getKey()