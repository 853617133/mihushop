	define(function(){
		//获取非行内样式
		function getStyle(obj,attr){
			return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
		}
		//运动框架
		var sport = function(obj,json,fn){
			clearInterval(obj.timer);
//			console.log(json);
//			alert();
			obj.timer = setInterval(function(){
				
				let stop = true;
				for(let attr in json){
//					console.log(attr);
					let target = json[attr];
					let cur = attr == "opacity" ? parseInt(parseFloat(getStyle(obj,attr)) * 100) : parseInt(getStyle(obj,attr));
					let speed = (target - cur) / 8;
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					if(cur != target){
						stop = false;
					}
					if(attr == "opacity"){
						obj.style.opacity = (cur + speed) / 100;
						obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
					}else{
						obj.style[attr] = cur + speed + "px";
					}
					
				}
				if(stop){
					clearInterval(obj.timer);
		//			alert("运动结束！");
					if(typeof fn == "function"){
						fn();
					}
				}
			},30)
		}
		return{
			sport : sport
		}
	})	
