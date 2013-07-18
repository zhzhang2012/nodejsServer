function route(handle,pathname,response){
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response);
	}else if(handle[pathname.replace('/lesson/','')] !== ""){
		handle['lesson'](response,pathname.replace('/lesson/',''));
	}else{
		console.log("No request handler found for " + pathname);
    	response.writeHead(404, {"Content-Type": "text/plain"});
   	 	response.write("404 Not found");
   		response.end();
	}
}

exports.route = route;