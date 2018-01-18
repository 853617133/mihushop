//设置配置文件(配置依赖模块的路径)
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"sport" : "sport",
		"HCsport" : "huanchong",
		"lb1" : "lb1",
		"lb2" : "lb2",
		"ajax" : "ajax"
	}
})
//执行代码
require(["jquery","cookie","sport","HCsport","lb1","ajax","lb2"],function($,cookie,sport,HCsport,lb1,ajax,lb2){
	//代码"listChange",listChange
	$(function(){
		//给登录按钮加一个点击事件
		$("#btn-L").click(function(){
			location.href = "html/login.html";
		})
		//给注册按钮加一个点击事件
		$("#btn-R").click(function(){
			location.href = "html/register.html";
		})
		//给购物车按钮加一个点击事件
		$("#buy").click(function(){
			location.href = "html/cart.html";
		})
		//左div的鼠标事件
		var oDivL = document.getElementById("div-L");
		oDivL.onmouseenter = function(){
			sport.sport(oDivL,{"left": 0 });
		}
		oDivL.onmouseleave = function(){
			sport.sport(oDivL,{"left" : -266})
		}
		//左鼠标的滑动跟随
		window.onscroll = function(){
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var target = Math.floor(document.documentElement.clientHeight / 2 -oDivL.offsetHeight / 2 + scrollTop);
			HCsport.HCsport(oDivL,target);
		}
		
		//搜索选项
		var spanBox = document.getElementById("spanBox");
		var spanGood = document.getElementById("spanGood");
		var spanStore = document.getElementById("spanStore");
		spanGood.onclick = function(){
			spanStore.style.display = "block";
			spanStore.onclick = function(){
				var x = spanGood.innerText;
				spanGood.innerText = spanStore.innerText;
				spanStore.innerText = x;
			}
		}
		spanBox.onmouseleave = function(){
			spanStore.style.display = "none";
		}
		
		
		//给所有的td添加hover事件
		var $tD = $("#GYS td");
		$tD.each(function(index, element) {
            $(this).hover(function(e) {
                $(this).stop().animate({"background-position-y" : 22},100).animate({"background-position-y" : -22},100).animate({"background-position-y" : 0},100)
            },function(e) {
                $(this).stop().animate({"background-position-y" : -22},100).animate({"background-position-y" : 22},100).animate({"background-position-y" : 0},100)
            })
        })
		//列表切换
		var listLi = $("#ban1 ul li");
		function listChange(){
				listLi.hover(function(){
					$(this).children("div").css("display","block");
				},function(){
					$(this).children("div").css("display","none");
				})
		}
		listChange();
		//首页轮播
		lb1.lb1();
		lb2.lb2();
		
//		listChange.listChange();
	})
})
