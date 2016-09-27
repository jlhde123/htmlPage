# htmlPage
内嵌网页html去除重复js，以代替通过get请求网页然后append到模板页面的方式

在jquery后引入

$.ajax ({
	type:"get",
	url:"index2.html",
	success:function (data){
		$("#cotainer").htmlPage(data);
	}

})

#会自动把data里面与当前页中重复的js文件去除，默认加到body的末尾，也可以在第二个参数指定目标

$("#cotainer").htmlPage(data,$("#insert"));