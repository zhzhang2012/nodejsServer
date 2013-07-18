var lessonData = require("./data.json");

function start(response){
	console.log("server starts & homepage visited");
	
	var body = "<html>"+
				"<head>"+
				"	<title>欢迎来到第一课</title>"+
				'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
				"</head>"+
				"<body>"+
					"<span>现在开始答题</span><br>"+
					"<button id=\"startLesson\">进入</button>"+
				"</body>"+
				"</html>";
	
	var script = "<script type='text/javascript'>"+
					"document.getElementById('startLesson').addEventListener('click',function(){"+
						"location.href = '/lesson/1'"+
					"});"+
				"</script>";
				
	response.writeHead(200, {"Content-Type": "text/html"});			
    response.write(body);
    response.write(script);
    
    response.end();
}

function lesson(response,id){

	//console.log(lessonData.problems[id-1].choices.length);

	var body = "<html>"+
				"<head>"+
				"	<title>"+lessonData.lesson+"&nbsp;第"+id+"题</title>"+
				"<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>"+
				"</head>"+
				"<body>"+
					"<span>题目："+lessonData.problems[id-1].id+"</span><br>"+
					"<form name='problem"+id+"' id='problem"+id+"' method='post' action='/lesson/"+(parseInt(id)+1)+"'>";
					
	for(var i=0;i<lessonData.problems[id-1].choices.length;i++){
		body += "<input type='radio' name='choices' value='"+i+"'/>"+lessonData.problems[id-1].choices[i].body+"<br>";
	}
	
	body +=				"<input type='submit' id=\"continue\" value='继续'>"+
					"</form>"+
				"</body>"+
			"</html>";
								
	response.writeHead(200, {"Content-Type": "text/html"});			
    response.write(body);
    
    response.end();
}



exports.start = start;
exports.lesson = lesson;