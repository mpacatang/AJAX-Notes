    var tableQuery = 'link to json data';
    
    var testRequest = new XMLHttpRequest();
    testRequest.open('GET', tableQuery);
    testRequest.onload = function(){
        var myData = JSON.parse(testRequest.responseText);
        console.log(myData);
    }
    testRequest.send();
