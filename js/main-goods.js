//设置配置文件(配置依赖模块的路径)
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"sport" : "sport",
		"HCsport" : "huanchong"
//		"cart" : "main-cart"
		
//		"lb1" : "lb1",
//		"lb2" : "lb2",
//		"ajax" : "ajax"
	}
})
//执行代码
require(["jquery","cookie","sport","HCsport"],function($,cookie,sport,HCsport){
	//代码"listChange",listChange,"lb1","ajax","lb2",lb1,ajax,lb2,"main-cart",cart
	$(function(){
		//给购物车按钮加一个点击事件
		$("#buy").click(function(){
			location.href = "cart.html";
		})
		//给第一个商品加一个点击事件
		$("#content section dl").eq(0).click(function(){
			location.href = "goodxq.html";
		})
		$("#content section dl").eq(1).click(function(){
			location.href = "goodxq2.html";
		})
		$("#content section dl").eq(2).click(function(){
			location.href = "goodxq3.html";
		})
		$("#content section dl").eq(3).click(function(){
			location.href = "goodxq4.html";
		})
		$("#content section dl").eq(4).click(function(){
			location.href = "goodxq5.html";
		})
//		console.log($("#content section dl").eq(0))
		
		
		//右跟随的span的值
		function spanNum(){
			var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
			console.log(cartStr);
			var cartObj = convertCartStrToObj(cartStr);
			console.log(cartObj);
			var key = 0;
			var spannum = 0;
			for( var key in cartObj ){
				//console.log(key);
				console.log(cartObj[key].num);
				spannum += parseInt(cartObj[key].num);
			}
			console.log(spannum);
			$("#changeNum").text(spannum);
			$("#spanNum").text(spannum);
		}
		spanNum();
		function convertCartStrToObj(cartStr) {
			if(!cartStr) {
				return {};
			}
			if(cartStr){
				return JSON.parse(cartStr);
			}
		}

			function convertObjToCartStr(obj) {
				var cartStr = "";
				for(var id in obj) {
					if(cartStr) {
						cartStr += ":";
					}
					cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
				}
				return cartStr;
			}
	})
})