//设置配置文件(配置依赖模块的路径)
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"sport" : "sport"
	}
})
//执行代码
require(["jquery","cookie","sport"],function($,cookie,sport){
	//代码,"sport","HCsport",sport,HCsport
	$(function(){
//		var LXlist = $(".LXlist");
//		console.log(LXlist);
		var oDl = $(".LXlist dl dt");
//		console.log(oDl);
		oDl.each(function(){
//			console.log(this);
			var onoff = false;
			$(this).click(function(){
				if(!onoff){
					$(this).parent().children("dd").css({"display" : "block"});
//					console.log($(this).parent().children("dd"));
				}else{
					$(this).parent().children("dd").css({"display" : "none"});
//					console.log($(this).parent().children("dd"));
				}
				onoff = !onoff;
			})
		})
				//取出在cookie中存的购物车信息
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				var money = 0; 
				
				if(!cartStr) {
					$(".blank").css({
						display: "block"
					});
				}else {
						
						var cartObj = convertCartStrToObj(cartStr);
						console.log(cartObj)
						//遍历所有的商品生成html添加到购物车列表中去
						for(var id in cartObj) {
							//商品信息对象
							var good = cartObj[id];
							var str = '<ul class="goodInfo" data-good-id="' + id + '">' +
								'<li><input type="checkbox" name="" id="" value="" /></li>' +
								'<li><img src="' + good.src + '" /></li>' +
								'<li>' + good.name + '</li>' +
								'<li>' + good.price + '</li>' +
								'<li class="num">' +
								'<a href="javascript:;" class="minus">-</a>' +
								' <input type="text" value="' + good.num + '" />  ' +
								'<a href="javascript:;" class="plus">+</a>' +
								'</li>' +
								'<li class="total">' + good.num * good.price + '</li>' +
								'<li><a href="javascript:;" class="del">删除</a></li>' +
								'</ul>';
							//将上面的结构添加到cartList中去
							$(str).prependTo("#cartList");
	//						if()
							money +=good.num * good.price
							$("#countspan").html(money);
//							loadpage();
	//						console.log(good.num * good.price)
						}
//						var mmm = loadpage();
//						console.log(mmm);
					loadpage()
					
					$("#buybuybuy").click(function(){
						location.href = "finish.html";
					})
					
					//给每个商品添加从购物车删除的事件
					$('.goodInfo a.del').click(function() {
						//在页面上将商品信息删除，顺便获取一个该商品的id
						var id = $(this).parents('.goodInfo').remove().attr("data-good-id");
						//从cookie中将该商品删除
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);

						delete cartObj[id];
						
						//将新商品信息放回cookie
						$.cookie('cart', JSON.stringify(convertObjToCartObj(cartObj)), {
							expires: 7,
							path: "/"
						});
						var mmm = loadpage();
						console.log(mmm);
						$("#countspan").html(mmm);
					})

					//给增加按钮添加事件
					$(".goodInfo a.plus").click(function() {
						var id = $(this).parents('.goodInfo').attr("data-good-id");
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						countmoney = 0;
						cartObj[id].num += 1;
						//将页面上显示的数量加1
						$(this).siblings("input").val("" + cartObj[id].num);
						//更新页面上的小计
						$(this).parent().siblings('.total').html(cartObj[id].num * cartObj[id].price + "");
						//将信息放回cookie
						$.cookie('cart', JSON.stringify(cartObj), {
							expires: 7,
							path: "/"
						});
						var mmm = loadpage();
						console.log(mmm);
						$("#countspan").html(mmm);
//						loadpage()
//						countmoney = ;
//						console.log(countmoney);
						
					});
					//给减按钮添加点击事件
					$(".goodInfo a.minus").click(function(){
						var id = $(this).parents('.goodInfo').attr("data-good-id");
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						if(cartObj[id].num > 1){ //商品数量减少不能少于1
							cartObj[id].num -= 1;
							//将页面上显示的数量减1
							$(this).siblings("input").val("" + cartObj[id].num);
							//更新页面上的小计
							$(this).parent().siblings('.total').html(cartObj[id].num * cartObj[id].price + "");
							//将信息放回cookie
							$.cookie('cart', JSON.stringify(cartObj), {
								expires: 7,
								path: "/"
							});
							var mmm = loadpage();
							console.log(mmm);
							$("#countspan").html(mmm);
						}
					});
					
					//改数量的input绑定一个blur事件
					$(".goodInfo li.num input").blur(function(){
						var id = $(this).parents('.goodInfo').attr("data-good-id");
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						var cartObj = convertCartStrToObj(cartStr);
						//判断用户输入是否合法
						var pattern = /^\d+$/;
						if(!pattern.test($(this).val())){
							cartObj[id].num = 1;
							$(this).val("1");
						}else{
							//修改一下数量
							cartObj[id].num = parseInt($(this).val());
						}
						$(this).siblings("input").val("" + cartObj[id].num);
						//更新页面上的小计
						$(this).parent().siblings('.total').html(cartObj[id].num * cartObj[id].price + "");
						//将信息放回cookie
						$.cookie('cart', JSON.stringify(cartObj), {
							expires: 7,
							path: "/"
						});
						var mmm = loadpage();
						console.log(mmm);
						$("#countspan").html(mmm);
					})
				}

			function loadpage(){
//				var totallen = $(".num input").val();
//				console.log(totallen);
				
				var nnn= 0;
				var spanNum = 0
				$(".total").each(function(){
//					console.log($(this));
//					console.log($(this).prev().children("input").val());
					spanNum += parseInt($(this).prev().children("input").val());
					nnn += parseInt($(this).text());
				})
				$("#spanNum").text(spanNum);
				$("#changeNum").text(spanNum);
				console.log(nnn);
				console.log(spanNum);
				return nnn;
			}
			function convertObjToCartObj(obj) {
//				var cartStr = "{";
//				var count = 0;
				for(var id in obj) {
//					if(cartStr) {
//						cartStr += ":";
//					}
//					cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
//					count ++;
//					if(count == 2){
//						cartStr += ",";
//					}
//					cartStr += '"' + id + '":{' + '"name":"' + obj[id].name + '","price":"' + obj[id].price + '","num":"' + obj[id].num + '","src":"' + obj[id].src + '"}';
					obj[id] = {
						"name" : obj[id].name,
						"price" : obj[id].price,
						"num" : obj[id].num,
						"src" : obj[id].src
					};
				}
//				cartStr += "}";
//				return cartStr;
				return obj;
			}

			function convertCartStrToObj(cartStr) {
				if(!cartStr) {
					return {};
				}
				if(cartStr){
					console.log(cartStr);
//					alert(1);
					return JSON.parse(cartStr);
				}
//				console.log(cartStr);
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
