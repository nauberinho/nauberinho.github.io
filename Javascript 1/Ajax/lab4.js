request.open('GET', 'http://forverkliga.se/JavaScript/api/ajax-lab.php? register=true&name=nauber');

    
request.onreadystatechange = function(event) {
	console.log("readyState:" + request.readyState);
	console.log("status:" + request.status);
	console.log("responseText:" + request.responseText);
	if( request.status == 4 ){
        console.log('- success!');
	console.log("-----");
    };
    //resultat.innerHTML = request.responseText   
    li.innerHTML = 'Your information: ' + request.responseText;
    
};
    
    request.send();