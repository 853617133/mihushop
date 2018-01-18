define(function(){
	//parabola(obj,{left:300,top:500},speed);//对象，目标位置
	function parabola(obj,target,speed){
		var a = 0.002; //曲率
		//目标终点的相对坐标
		var coord = {
			x : target.left - $(obj).offset().left,
			y : target.top - $(obj).offset().top
		}
		console.log($(obj).offset().left)
		console.log($(obj).offset().top)
		//系数
		var b = (coord.y - a * coord.x * coord.x) / coord.x;
		//原点的页面坐标
		var center = {
			x : obj.offsetLeft,
			y : obj.offsetTop
		}
		
		//x轴的偏移量(x的位移)
		var offsetX = 0;
		var timer = setInterval(function(){
			obj.style.left = center.x + (offsetX += speed) + "px";
			obj.style.top = center.y + (a * offsetX * offsetX + b * offsetX) + "px";
			if(offsetX >= coord.x){
				obj.style.left = target.left + "px";
				obj.style.top = target.top + "px";
				clearInterval(timer);
			}
		},30);
	}
	return{
		parabola : parabola
	}
})