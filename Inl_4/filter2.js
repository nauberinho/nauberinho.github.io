let addproductbtn = document.getElementById('addproductbtn')
let db = firebase.database();

let productnameinput = document.getElementById('productnameinput');
let productpriceinput = document.getElementById('productpriceinput');

let ul = document.getElementById('ul');

let filterselect = document.getElementById('filterselect');
let viewselect = document.getElementById('viewselect');
let leftarrow = document.getElementsByClassName('arrowleft')[0]
let rightarrow = document.getElementsByClassName('arrowright')[0]

let firstProductList = [' '];
let clicks = 0;

let removeproductsbtn = document.getElementById('removeproductsbtn')
removeproductsbtn.addEventListener('click', () => deleteProducts())

function deleteProducts() {
    firebase.database().ref('/products/').set(0);


};


getProducts(Number(viewselect.value), filterselect.value, 'startAt', 'a');

viewselect.addEventListener('onchange', function () {
    firstProductList=[{name:'f'}]
    clicks = 0;
    getProducts(Number(viewselect.value), filterselect.value, 'endAt', firstProductList[clicks])
    

});

leftarrow.addEventListener('click', function () {
    if(clicks>0){
        

    getProducts(Number(viewselect.value), filterselect.value, 'startAt', firstProductList[clicks].name); //amount, filter, startorend, at--arguments: (amount, filter, index, startorend, at)

        
        firstProductList.pop();


        clicks--
    }

});

rightarrow.addEventListener('click', function () {


    console.log('right')

    getProducts(Number(viewselect.value), filterselect.value, 'startAt', firstProductList[clicks].name);
    clicks++


});


function writeProductData(name, price) {
    let object = {
        name: name,
        price: price

    };

    let newPostRef = db.ref('products/').push(object);
    let key = newPostRef.key;

};

addproductbtn.addEventListener('click', function () {

    writeProductData(productnameinput.value, Number(productpriceinput.value))
      firstProductList=[' ']
    clicks = 0;
    getProducts(Number(viewselect.value), filterselect.value, 'endAt', firstProductList[clicks])


})


function getProducts(amount, filter, startorend, at) {
    console.log('amount: ' + amount + ', filter: ' + filter + ', startorend: ' + startorend + ', at: ' + at)
    console.log('i getproducts')

    let startAtObject = {

        name : ''

    }



    let sortedList = [];
    let startEnd;
    console.log('i getproducts2')

    if (startorend == 'startAt') {
        

        startEnd = db.ref('products').orderByChild(filter).limitToFirst(amount).startAt(at).once('value');
    } else if ((startorend == 'endAt')) {
        

        startEnd = db.ref('products').orderByChild(filter).limitToFirst(amount).startAt(at).once('value');

    }



    startEnd.then(function (snapshot) {
        console.log(snapshot)
            while (ul.hasChildNodes()) {
        ul.removeChild(ul.lastChild);
    }
        
        //firstProductList.push(snapshot.val());

       snapshot.forEach((index)=>{
                        console.log('i index')
                 let data = index.val();
            let newProduct = document.createElement('LI')
            let productName = document.createElement('span')
            productName.className='product-name';
           productName.innerHTML=data.name
            let productPrice = document.createElement('span')
            productPrice.className='product-price';
           productPrice.innerHTML=data.price
            newProduct.appendChild(productName)
            newProduct.appendChild(productPrice)
           ul.appendChild(newProduct)
           sortedList.push(newProduct);
           //console.log(snapshot.val())
           startAtObject.name = data.name;

            
                      

            
        });
firstProductList.push(startAtObject)
    });

    


}



function checkForNewProducts() {

    db.ref('products/').on('child_added', function (snapshot, prevChildKey) {



    });

};

checkForNewProducts();
