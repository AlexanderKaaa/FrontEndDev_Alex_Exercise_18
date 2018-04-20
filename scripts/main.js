$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
     
	
	$.get(appendUrl, function(response) {
		 var myList = $('#append');
		 var appendList = '';
        for(var i = 0; i < response.length; i++){
			var temp=response[i];
            appendList += "<li>Index:" + i + " Title:" + temp.title + "</li>";
		
        }
         myList.append(appendList);
		
     
   });


    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
   
	var prependUrl= $.get(prependUrl, function(response) {
		var myList2 = $('#prepend');
	   var prependList = '';
        for(var i = 0; i < response.length; i++){
			var temp2=response[i];
            prependList += "<li>Index:" + i + " Title:" + temp2.title+ "</li>";
			  

        }
        myList2.prepend(prependList);
  
   });

});