	function ajax(url,fnWin,fnFaild){
		//创建ajax对象
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		//连接服务器
		xhr.open("GET",url,true);
		//发送请求
		xhr.send();
		//接受返回
		xhr.onreadystatechange = function(){
			if(	xhr.readyState == 4 ){
				if( xhr.status == 200){
					if( typeof fnWin == "function" ){
						fnWin( xhr.responseText )
					}
				}else{
					if( typeof fnFaild == "function" ){
						fnFaild();
					}
				}
			}
		}
	}
