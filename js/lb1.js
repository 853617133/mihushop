define(["ajax"],function(){
	var oBox = document.getElementById("lb-2");
//	console.log(oBox);
	var oTopUl = document.getElementById("topUl");
//	console.log(oTopUl);
	var oTopLi = oTopUl.getElementsByTagName("li");
//	console.log(oTopLi);
	var oBtnLeft = document.getElementById("btn_l");
//	console.log("btn-l："+oBtnLeft);
	var oBtnRight = document.getElementById("btn_r");
//	console.log("btn-r："+oBtnRight);
	var oImg = oTopUl.getElementsByTagName("img");
//	console.log(oImg);
	var oBottom = document.getElementById("bottomUl");
//	console.log(oBottom);
	var oBottomLi = oBottom.getElementsByTagName("li");
//	console.log(oBottomLi);
	var lb1 = function(){
		
		//利用ajax将图片图片动态加入
		function add(){
			ajax("../mihushop/Json/index-img-lb1.json?t=" + new Date().getDate(),function(str){
				let arr = (new Function("return" + str))();
//				console.log(arr);
				for( let i = 0;i < arr.length;i ++ ){
					oImg[i].src = arr[i];
				}
			})
		}
		add();
		for(var i = 0;i < oBottomLi.length;i ++){
			oBottomLi[i].num = i;
			oBottomLi[i].onmouseover = function(evt){
				var e = evt || window.event;
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
				this.style.background = "blue";
				nowIndex = this.num;
				init();
			}
			oBottomLi[i].onmouseout = function(evt){
				var e = evt || window.event;
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
				this.style.background = "#aaa";
				nowIndex = this.num;
				init();
			}
		}
		
		
		var nowIndex = 0;
		var zIndex = 1;
		var timer = null;
		init();
		autoPlay();
		
		oBtnLeft.onclick = function(){
			nowIndex --;
			if(nowIndex < 0){
				nowIndex = oTopLi.length - 1;
			}
			init();
		}
		oBtnRight.onclick = function(){
			nowIndex ++;
			if(nowIndex > oTopLi.length - 1){
				nowIndex = 0;
			}
			init();
		}
		
		
		function init(){
			oTopLi[nowIndex].style["z-index"] = ++ zIndex;
			for(var i = 0;i < 6;i ++){
				oBottomLi[i].style.backgroundColor = "#ccc";
			}
			oBottomLi[nowIndex].style.backgroundColor = "#EE2346";
			
		}
		
		
		function autoPlay(){
			timer = setInterval(function(){
				nowIndex ++;
				if(nowIndex > oTopLi.length-1){
					nowIndex = 0;
				}
				init();
			},3000);
		}
		
		
		oBox.onmouseenter = function(){
			clearInterval(timer);
		}
		oBox.onmouseleave = function(){
			autoPlay();
		}
	}
	return {
		lb1 : lb1
	}
})		