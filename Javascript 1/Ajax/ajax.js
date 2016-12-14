let clickme = document.getElementById('clickme');

clickme.addEventListener('click', function(event){
                         
let request = new XMLHttpRequest();

request.open('GET', "http://mardby.se/AJK15G/lorem_text.php");

    
request.onreadystatechange = function(event) {
	console.log("readyState:" + request.readyState);
	console.log("status:" + request.status);
	console.log("responseText:" + request.responseText);
	if( request.status == 4 )
        console.log('- success!');
	console.log("-----");
};
    
    request.send();
}




