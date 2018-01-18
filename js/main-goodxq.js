//设置配置文件(配置依赖模块的路径)
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"sport" : "sport",
		"fly" : "jquery.fly",
		"requestAnimationFrame" : "requestAnimationFrame",
		"fly1" : "parabola"
	}
})
//执行代码
require(["jquery","cookie","sport","fly","requestAnimationFrame","fly1"],function($,cookie,sport,fly,requestAnimationFrame,fly1){
	//代码,"sport","HCsport",sport,HCsport
	$(function(){
		var LXlist = $(".LXlist");
		var oDl = $(".LXlist dl dt");
		oDl.each(function(){
			var onoff = false;
			$(this).click(function(){
				if(!onoff){
					$(this).parent().children("dd").css({"display" : "block"});
				}else{
					$(this).parent().children("dd").css({"display" : "none"});
				}
				onoff = !onoff;
			})
		})
		
		
		
		function lbt(){
			//轮播图
			//获取页面元素
			//获取外层大盒子

			var oDiv = document.getElementById("SPlb");
			//获取上半部的ul
			var oUlUp = document.getElementById("top1");
			//获取大图
			var oBigPic = oUlUp.getElementsByTagName("li");
			//获取下半部
			var oDown = document.getElementById("bottom1");
//			console.log(oDown);
			//获取小图所有UL
			var oSmallUl = document.getElementById("small_ul");
			//获取小图
			var oSmallPic = oDown.getElementsByTagName("li");
			//获取放大镜的ul
			var oBox = document.getElementById("addbig_ul");
			//获取放大镜的图
			var addpic = oBox.getElementsByTagName("li");
			//设置小图Ul的宽度
			oSmallUl.style.width = oSmallPic[0].offsetWidth * oSmallPic.length + "px";
			
			
			//定义控制当前图片显示的下标
			var nowIndex = 0;
			var zIndex = 1; //当前图片的zindex值
			var timer = null;
			var num = 0;
			if(num > 0){
				init();
			}
			//给小图加事件
			for(var i = 0;i < oSmallPic.length;i ++){
				oSmallPic[i].index = i; //记录当前下标
				oSmallPic[i].onclick = function(){
					nowIndex = this.index;
					num++;
					init();
				}
			}
			//图片轮播
			function init(){
				//控制大图轮播
				add(addpic[nowIndex]);
				oBigPic[nowIndex].style["z-index"] = ++ zIndex;
				addpic[nowIndex].style["display"] = "block";
				for (var i = 0; i < 5; i++) {
					if(addpic[i] != addpic[nowIndex]){
						addpic[i].style.display = "none";
					}
				}
				//设置小图的初始化透明度
				//所有小图透明度为50
				for(var i = 0;i < oSmallPic.length;i ++){
					sport.sport(oSmallPic[i],{"opacity" : 50});
				}
				//当前小图透明度为100
				sport.sport(oSmallPic[nowIndex],{"opacity" : 100});

			}
		}
		lbt();
		 
		function add(obj){
			//获取页面元素
			//var oBox = document.getElementById("addbig");
			var oUlUp = document.getElementById("top1");
			var oMark = document.getElementById("mark");
			//console.log(oMark);
			var oFloat = document.getElementById("float_layer");
			var oBox = document.getElementById("addbig_ul");
			var oaddli = oBox.getElementsByTagName("li")[0];
			var oBimg = obj.getElementsByTagName("img");
			//小图移入移出事件
			oUlUp.onmouseover = function(){
				oFloat.style.display = "block";
				oBox.style.display = "block";
			}
			oUlUp.onmouseout = function(){
				oFloat.style.display = "none";
				oBox.style.display = "none";
			}
			
			//给遮罩添加移动事件
			oMark.onmousemove = function(evt){
//				alert(1);
				var e = evt || window.event;
				//获取鼠标移动坐标
				var x = e.offsetX - oFloat.offsetWidth / 2;
				var y = e.offsetY - oFloat.offsetHeight / 2;
				//添加边界
				if( x<=0 ){
					x=0;
				}
				else if( x>=oMark.offsetWidth-oFloat.offsetWidth ){
					x=oMark.offsetWidth-oFloat.offsetWidth
				}
				
				if( y<=0 ){
					y=0;
				}
				else if( y>=oMark.offsetHeight-oFloat.offsetHeight ){
					y=oMark.offsetHeight-oFloat.offsetHeight
				}
				//将所得坐标赋给小方块
				//console.log(x+"  "+y)
				oFloat.style.left = x + "px";
				oFloat.style.top = y + "px";
				//计算比例
				let bX = x / ( oMark.offsetWidth-oFloat.offsetWidth );
				let bY = y / ( oMark.offsetHeight-oFloat.offsetHeight );
				//通过比例，使大图移动
				//console.log(bX);
				//console.log(- bX * ( oBimg[0].offsetWidth - oBox.offsetWidth ));
				//console.log(oBimg[0].offsetWidth);
				//console.log(oBimg[0].offsetWidth - oBox.offsetWidth)
				oBimg[0].style.left = - bX * ( oBimg[0].offsetWidth - oBox.offsetWidth ) + "px";
				oBimg[0].style.top = - bY * ( oBimg[0].offsetWidth - oBox.offsetHeight ) + "px";
			}
		}
		
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
		
		
		
		//购物车+飞入
		loadCart();
				
		//给购物车按钮加一个点击事件
		$("#buy").click(function(){
			location.href = "cart.html";
		})
		
		//给加入购物车按钮添加点击事件
		$("#addcart").click(function(e){
			//获取商品的id（用来区分不同的商品）
			var goodId = $(this).parents(".art3").attr("data-good-id");
			//获取商品的名称
			var goodName = $(this).parents(".goodsCon").children("h2").eq(0).children("span").eq(0).html();
			//获取商品的价格
			var goodPrice = parseFloat($(this).parents(".SPgm").children(".art1").children("span").eq(1).children("b").html());

			//获取商品的图片src
			var goodSrc = $(this).parents(".xqUp").children("#SPlb").children("#boxtop").children("#top1").children("li").eq(0).children("img").attr("src");
			spanNum();
			
			var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					//将字符串转成对象
					var cartObj = convertCartStrToObj(cartStr);
//					console.log(cartObj);
					//判断该商品是否已经在购物车中存在
					if(goodId in cartObj){
						//如果已存在，那么该商品的数量加1
						cartObj[goodId].num += 1;
					}else{
						//如果不存在，那么将新商品的信息存入
						cartObj[goodId] = {
							"name" : goodName,
							"price" : goodPrice,
							"num" : 1,
							"src" : goodSrc
						};
					}
					
					//将新的购物车信息存回cookie
					//将对象转为字符串
					cartStr = JSON.stringify(cartObj);
					console.log(cartStr);
					//存入cookie
					//document.cookie = "key=value"
					$.cookie("cart",cartStr,{expires : 7,path:"/"});

					//做一个飞入购物车的效果
//					var cloneImg = $(this).siblings("img").clone().css({width:50,height:50});
					var cloneImg = $(this).parents(".xqUp").children("#SPlb").children("#boxtop").children("#top1").children("li").eq(0).children("img").clone().css({width:50,height:50,position:"absolute",left:130,top:160,zIndex:9999})[0];
					//console.log(cloneImg);
					//console.log($(cloneImg));
					$(this).parent().append($(cloneImg));
					var targetObj = $("#buy")[0];
					console.log($(targetObj).offset().left);
					console.log($(targetObj).offset().top);
					fly1.parabola(cloneImg,{left:$(targetObj).offset().left,top:$(targetObj).offset().top},13);
					
//					cloneImg.fly({
//						start : {
//							top : e.clientY,
//							left : e.clientX
//						},
//						end :{
//							top : $("#buy").offset().top,
//							left : $("#buy").offset().left,
//							width:0,
//							height:0
//						},
//						autoPlay : true,
//						onEnd : function(){
//							$("#buy").val(function(index,v){
//								//"购物车（0）"
//								var pattern = /(\d+)/;
//								var num = parseInt(v.match(pattern)[1]);
//								return "购物车(" + (num + 1) + ")";
//							});
//							cloneImg.remove();
//						}
//					})
				})
			});
		})
		function convertCartStrToObj(cartStr) {
			if(!cartStr) {
				return {};
			}
			if(cartStr){
				return JSON.parse(cartStr);
			}
		}
			function convertCartStrToObj(cartStr){
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!cartStr){
					return {};
				}
				console.log(cartStr);
				return JSON.parse(cartStr);
			}

			//加载购物车中的信息（使商品页与购物车页中的购物车数量同步）
			function loadCart(){
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					var cartObj = convertCartStrToObj(cartStr);
					//获取到购物车中所有商品的数量
					var total = 0;
					for(var id in cartObj){
						total += cartObj[id].num;
					}
					$("#buy").val("购物车(" + total + ")");
			}
			//className兼容
		function byClassName( obj,className ){
			if( obj.getElementsByClassName ){
				return obj.getElementsByClassName( className )
			}
			else{
				var arr = [];
				var eles = document.getElementsByTagName("*");
				for( var i = 0;i < eles.length; i ++ ){
					if( eles[i].className == className ){
						arr.push( eles[i] );
					}
				}
				return arr;
			}
		}