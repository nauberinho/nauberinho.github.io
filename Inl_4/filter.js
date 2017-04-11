let addproductbtn = document.getElementById('addproductbtn')
let db = firebase.database();
let productnameinput = document.getElementById('productnameinput');
let productpriceinput = document.getElementById('productpriceinput');
let ul = document.getElementById('ul');
let filterselect = document.getElementById('filterselect');
let viewselect = document.getElementById('viewselect');
let leftarrow = document.getElementsByClassName('arrowleft')[0]
let rightarrow = document.getElementsByClassName('arrowright')[0]
let firstProductList = [null];
let clicks = 0;
let removeproductsbtn = document.getElementById('removeproductsbtn')
removeproductsbtn.addEventListener('click', () => deleteProducts())

function deleteProducts() {
    firebase.database().ref('/products/').set(0);
};
console.log('firstProductList = ' + firstProductList)
getProducts(Number(viewselect.value), filterselect.value, 'startAt', firstProductList[0]);

filterselect.addEventListener('change', function (){
        firstProductList=[null]
    getProducts(Number(viewselect.value), filterselect.value, 'endAt', firstProductList[clicks])
    clicks = 0;
    
})
viewselect.addEventListener('change', function () {
    console.log('hej')
    firstProductList=[null]
    getProducts(Number(viewselect.value), filterselect.value, 'endAt', firstProductList[clicks])
    clicks = 0;
});
leftarrow.addEventListener('click', function () {
    console.log('firstProductList = ' + firstProductList)
    if (clicks > 0) {
        clicks--
        getProducts(Number(viewselect.value), filterselect.value, 'startAt', firstProductList[clicks]); //amount, filter, startorend, at--arguments: (amount, filter, index, startorend, at)
        firstProductList.pop();
    };
});
rightarrow.addEventListener('click', function () {
    console.log('right')
    clicks++
    getProducts(Number(viewselect.value), filterselect.value, 'startAt', firstProductList[clicks]);
    console.log('firstProductList = ' + firstProductList);
});

function writeProductData(id, name, price) {
    let object = {
        id: id
        , name: name
        , price: price
    };
    
    let match=false;
    db.ref('products/').once('value').then(function (snapshot) {
        for(var obj in snapshot.val()){
            
            if(obj.name==name){
                match=true;
            }
            
        }
        
          if(match!=true){
    let newPostRef = db.ref('products/').push(object);
    let key = newPostRef.key;
        
    };
  
    });
};
addproductbtn.addEventListener('click', function () {
    
    if(productpriceinput.value.length==0){
        
        productpriceinput.value = 'Ge produkten ett pris'
        productpriceinput.style.color='red'
    } else if( productnameinput.value.length ==0){
        
        productnameinput.value = 'Ge produkten ett namn'
        productnameinput.style.color='red'
    }
    
    else{
    let productsLength;
    let listlength = 0;
    db.ref('products/').once('value').then(function (snapshot) {
        productsLength = Object.keys(snapshot.val()).length + 1
        console.log(listlength, productsLength)
        writeProductData(productsLength, productnameinput.value, Number(productpriceinput.value))
    });
    console.log('length: ' + productsLength)
    };
})

function getProducts(amount, filter, startorend, at) {
    
    console.log( 'amount: ' + amount + ',filter: ' + filter +',startorend: ' + startorend + ',at: ' + at)
    
    ul.innerHTML='';
    
    let sortedList = [];
    let startEnd;

        startEnd = db.ref('products/').orderByChild(filter).startAt(at).limitToFirst(amount).once('value');


    startEnd.then(function (snapshot) {
        
        if(snapshot!=null){
        let startatname = '';
        let snapshotlength;
        for (var obj in snapshot.val()){
            snapshotlength++;
            
        }
        
        
       
        
        snapshot.forEach((index) => {
      
               // console.log('indexkey: ' + index.key);
                //console.log('i index: ' + index.val())
                let data = index.val();
                //console.log('data.price: ' + data.price);
                startatname=data[filter];
               // console.log('startatname: ' + startatname)
                let newProduct = document.createElement('LI');
                let productName = document.createElement('span');
                productName.className = 'product-name';
                productName.innerHTML = ' &nbsp' + data.name;
                let productPrice = document.createElement('span');
                productPrice.className = 'product-price';
                productPrice.innerHTML = data.price + '$';
                newProduct.appendChild(productName);
                newProduct.appendChild(productPrice);
                ul.appendChild(newProduct);
                sortedList.push(newProduct);
                //console.log(snapshot.val())
         
        });
            if(ul.childNodes.length>1){
        ul.removeChild(ul.lastChild);
            };
        firstProductList.push(startatname)
        console.log('firstProductList when pushed: ' + firstProductList[clicks])
    }
    });
    
    console.log('firstProductList = ' + firstProductList)
}

function checkForNewProducts() {
    db.ref('products/').on('child_added', function (snapshot, prevChildKey) {});
};
checkForNewProducts();