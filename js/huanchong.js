//缓冲运动 
	define(function(){
		var timer = null;
		var HCsport =  function(obj,target){
			clearInterval(timer);
//			console.log(obj);
			timer = setInterval(function(){
				//基数
				var speed = (target - obj.offsetTop) / 8; 
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(target == obj.offsetTop){
					clearInterval(timer);
				}else{
					obj.style.top = obj.offsetTop + speed + "px";
				}
//				console.log("当前值：" + obj.offsetTop + ":目标值：" + target + ":速度：" + speed );
			},30);
		}
		return {
			HCsport : HCsport
		}
	})