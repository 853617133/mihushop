define(function(){
	var listLi = $("#ban1 ul li");
	var listChange = function(){
			listLi.hover(function(){
				$(this).children("div").css("display","block");
			},function(){
				$(this).children("div").css("display","none");
			})
	}
	return {
		listChange : listChange
	}
})


