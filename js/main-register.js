//设置配置文件(配置依赖模块的路径)
require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"sport" : "sport",
		"HCsport" : "huanchong",
		"cookies" : "cookie"
//		"lb1" : "lb1",
//		"lb2" : "lb2",
//		"ajax" : "ajax"
	}
})
//执行代码
require(["jquery","cookie","sport","HCsport","cookies"],function($,cookie,sport,HCsport,cookies){
	//代码"listChange",listChange,"lb1","ajax","lb2",lb1,ajax,lb2
	$(function(){
		
		//获取登录按钮
		var oGoLogin = document.getElementById("Gotologin");
		//给登录按钮添加点击事件
		oGoLogin.onclick = function(){
			//转到登录页面
			location.href = "login.html"
		};
		
		var phoneNum = document.getElementById("phonenum");
		phoneNum.onblur = function(){
			var re = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
			var str = phoneNum.value;
//			console.log(re.test(str))
			if( re.test(str) ){
//				console.log(this);
				this.nextSibling.style.display = "block";
				this.nextSibling.lastChild.style.display = "none";
				this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -237px";
				return true;
			}
			else{
				this.nextSibling.style.display = "block";
				this.nextSibling.lastChild.style.display = "block";
				this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -268px";
			}
		}
		var Code = document.getElementById("code");
		Code.onblur = function(){
			var re = "8725";
			var str = Code.value;
//			console.log(str == re)
			if( str == re ){
//				console.log(this);
				this.parentNode.lastChild.style.display = "block";
				this.parentNode.lastChild.lastChild.style.display = "none";
				this.parentNode.lastChild.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -237px";
				return true;
			}
			else{
				this.parentNode.lastChild.style.display = "block";
				this.parentNode.lastChild.lastChild.style.display = "block";
				this.parentNode.lastChild.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -268px";
			}
		}
		var jiaoYan = document.getElementById("jiaoYan");
		jiaoYan.onblur = function(){
			var re = "123456";
			var str = jiaoYan.value;
//			console.log(str == re)
			if( str == re ){
//				console.log(this);
				this.parentNode.lastChild.style.display = "block";
				this.parentNode.lastChild.lastChild.style.display = "none";
				this.parentNode.lastChild.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -237px";
				return true;
			}
			else{
				this.parentNode.lastChild.style.display = "block";
				this.parentNode.lastChild.lastChild.style.display = "block";
				this.parentNode.lastChild.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -268px";
			}
		}
		var inpDg = document.getElementById("inpDg");
//		console.log(inpDg.checked);
		if(inpDg.checked){
			return true;
		}
		var oSub = document.getElementById("sub");
		var formUl = document.getElementById("formUl");
		var formUl2 = document.getElementById("formUl2");
		var JDtu = document.getElementById("jieduantu").getElementsByTagName("p")[0];
		console.log(JDtu);
		oSub.onclick = function(){
			if(	phoneNum.onblur() && Code.onblur() && jiaoYan.onblur() && inpDg.checked ){
				formUl.style.display = "none";
				formUl2.style.display = "block";
				JDtu.style.background = "url(../img/register/2_03.jpg) no-repeat center";
				var password1 = document.getElementById("password1");
				password1.onblur = function(){
					var re = /^[a-zA-Z]\w{5,19}$/;
					var str = password1.value;
		//			console.log(re.test(str))
					if( re.test(str) ){
		//				console.log(this);
						this.nextSibling.style.display = "block";
						this.nextSibling.lastChild.style.display = "none";
						this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -237px";
						return true;
					}
					else{
						this.nextSibling.style.display = "block";
						this.nextSibling.lastChild.style.display = "block";
						this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -268px";
					}
				}
				var password2 = document.getElementById("password2");
				password2.onblur = function(){
					var re = password1.value;
					var str = password2.value;
		//			console.log(re.test(str))
					if( str == re ){
		//				console.log(this);
						this.nextSibling.style.display = "block";
						this.nextSibling.lastChild.style.display = "none";
						this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -237px";
						return true;
					}
					else{
						this.nextSibling.style.display = "block";
						this.nextSibling.lastChild.style.display = "block";
						this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -268px";
					}
				}
				var sub21 = document.getElementById("sub21");
				var formUl3 = document.getElementById("formUl3");
				sub21.onclick = function(){
					if( password1.onblur() && password2.onblur() ){
						console.log("success");
						JDtu.style.background = "url(../img/register/3_03.jpg) no-repeat center"
						formUl2.style.display = "none";
						formUl3.style.display = "block";
						
						var userName = document.getElementById("userName");
						userName.onblur = function(){
							var re = /^[A-Za-z0-9]{4,20}$/;
							var str = userName.value;
							console.log(re.test(str))
							if( re.test(str) ){
								console.log(this);
								this.nextSibling.style.display = "block";
								this.nextSibling.lastChild.style.display = "none";
								this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -237px";
								return true;
							}
							else{
								this.nextSibling.style.display = "block";
								this.nextSibling.lastChild.style.display = "block";
								this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -268px";
							}
						}
						var oNC = document.getElementById("niCheng");
						oNC.onblur = function(){
							var re = /^[A-Za-z0-9]{4,15}$/;
							var str = oNC.value;
				//			console.log(re.test(str))
							if( re.test(str) ){
				//				console.log(this);
								this.nextSibling.style.display = "block";
								this.nextSibling.lastChild.style.display = "none";
								this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -237px";
								return true;
							}
							else{
								this.nextSibling.style.display = "block";
								this.nextSibling.lastChild.style.display = "block";
								this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -268px";
							}
						}
						var eMail = document.getElementById("e-mail");
						eMail.onblur = function(){
							var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
							var str = eMail.value;
				//			console.log(re.test(str))
							if( re.test(str) ){
				//				console.log(this);
								this.nextSibling.style.display = "block";
								this.nextSibling.lastChild.style.display = "none";
								this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -237px";
								return true;
							}
							else{
								this.nextSibling.style.display = "block";
								this.nextSibling.lastChild.style.display = "block";
								this.nextSibling.firstChild.style.background = "url(../img/register/zcbzicos.png) no-repeat -164px -268px";
							}
						}
						var oSub3 = document.getElementById("sub31");
						var formUl4 = document.getElementById("formUl4")
						oSub3.onclick = function(){
							if(	userName.onblur() && oNC.onblur() && eMail.onblur() ){
								JDtu.style.background = "url(../img/register/4_04.jpg) no-repeat center"
								formUl3.style.display = "none";
								formUl4.style.display = "block";
								var oLi = document.getElementById("formUl4").getElementsByTagName("li")[1].getElementsByTagName("i");
								console.log(oLi[1]);
								oLi[0].innerText = phoneNum.value;
								oLi[1].innerText = userName.value;
								oLi[2].innerText = oNC.value;
								
							}
							
							
							//获取用户名和密码
							var usn = userName.value;
							var pwd = password1.value;
							console.log(usn+"  "+pwd)
							var users = cookies.getCookie("registerUsers") ? cookies.getCookie("registerUsers") : "";
							//将字符串转为对象
							users = convertStrToObj(users);
							if(usn in users){ //判断usn属性是否在users对象中。
								alert("用户名已经被注册");
								return;
							}else{
								//注册成功，设置用户信息的cookie
								//test1 123  test2 abc  test3 888
								//"test1,123:test2,abc:test3,888"设置cookie的value值
								//registerUsers 设置cookie的name(key)值
								//将用户添加到已注册用户列表对象中
								users[usn] = pwd;
								//假设users[李涛] = 123
								//将用户信息对象转化回字符串，以便于设置cookie
								userStr = convertObjToStr(users);
								//设置用户信息cookie
								cookies.setCookie("registerUsers",userStr,7);
								console.log(decodeURIComponent(document.cookie))
								alert("注册成功！");
							}
						}
					}
				}
			}else{
				alert("请检查您输入的信息");
			}
    	}
		
		
//			//给注册按钮加事件
//			oRegister.onclick = function(){
//				//获取用户名和密码
//				var usn = oUserName.value;
//				var pwd = oPass.value;
//				
//				//检测一下用户是否已经存在
//				//假设："test1,123:test2,abc:test3,888"
//				/*转为对象
//				 * {
//				 * 	test1:123,
//				 *  test2:abc,
//				 *  test3:888
//				 * }
//				 */
//				//获取cookie中的用户信息
//				var users = getCookie("registerUsers") ? getCookie("registerUsers") : "";
//				
//				//将字符串转为对象
//				users = convertStrToObj(users);
//				if(usn in users){ //判断usn属性是否在users对象中。
//					alert("用户名已经被注册");
//					return;
//				}else{
//					//注册成功，设置用户信息的cookie
//					//test1 123  test2 abc  test3 888
//					//"test1,123:test2,abc:test3,888"设置cookie的value值
//					//registerUsers 设置cookie的name(key)值
//					//将用户添加到已注册用户列表对象中
//					users[usn] = pwd;
//					//假设users[李涛] = 123
//					
//					
//					//将用户信息对象转化回字符串，以便于设置cookie
//					userStr = convertObjToStr(users);
//					//设置用户信息cookie
//					setCookie("registerUsers",userStr,7);
//					console.log(decodeURIComponent(document.cookie))
//					alert("注册成功！");
//				}
//			};
//			
//			//给登录按钮添加点击事件
//			oGoLogin.onclick = function(){
//				//转到登录页面
//				location.href = "login.html";
//			};
		
		
		
		
		
		//将字符串转为对象
		function convertStrToObj(str){
			if(!str){
				return {};
			}
			//假设不为空："test1,123:test2,abc:test3,888:李涛,123"
			var users = str.split(":"); //将字符串转为数组 ["test1,123","test2,abc","test3,888"]
			var obj = {};
			/*
			 * var obj = new Object();
			 * obj["name"] = "zhangsan";
			 * 
			 */
			//遍历数组
			for(var i = 0; i < users.length; i ++){
				//将字符串转为数组
				var userData = users[i].split(",");
				//["test1",123] ["test2","abc"] ["test3",888]
				obj[userData[0]] = userData[1];
				/*转为对象如下：
				 * obj = {
				 * 	test1 : 123,
				 *  test2 : abc,
				 *  test3 : 888
				 * }
				 */
			}
			return obj;
		}
		
		//将对象转为字符串
		function convertObjToStr(obj){
			////假设不为空："test1,123:test2,abc:test3,888:李涛,123"
			var str = "";
			for(var usn in obj){
				var pwd = obj[usn];
				if(str){
					//看是否是第一组用户名和密码，如果不是，先在前面添加一个：
					str += ":";
				}
				str += usn + ',' + pwd;
			}
			return str;
		}		
		
	})
})