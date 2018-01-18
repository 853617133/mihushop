define(["ajax"],function(){
	function lb2(){
		var oBox1 = document.getElementsByClassName("lb-1")[0];
		var oBox2 = document.getElementsByClassName("lb-1")[1];
		var oBox3 = document.getElementsByClassName("lb-1")[2];
		var oBox4 = document.getElementsByClassName("lb-1")[3];
		var oTopUl = document.getElementsByClassName("topUla");
		console.log(oTopUl);
		var oTopLi1 = oTopUl[0].getElementsByTagName("li");
		var oTopLi2 = oTopUl[1].getElementsByTagName("li");
		var oTopLi3 = oTopUl[2].getElementsByTagName("li");
		var oTopLi4 = oTopUl[3].getElementsByTagName("li");
		var oBtnLeft = document.getElementsByClassName("btn_la");
		console.log(oBtnLeft[1]);
		console.log(oBtnLeft[2]);
		console.log(oBtnLeft[3]);
		var oBtnRight = document.getElementsByClassName("btn_ra");
		console.log(oBtnRight);
		//var oImg1 = oTopUl[i].getElementsByTagName("img");
		
		
		//var oImg = document.getElementById("img11");
		//console.log(oImg);
/*		
		var oBottom = document.getElementById("bottomUla");
		//console.log(oBottom);
		var oBottomLi = oBottom.getElementsByTagName("li");
		//console.log(oBottomLi);
*/		
/*		
 * 判断img的src是否为#  为空则用ajax添加   不为空直接返回//			利用ajax将图片图片动态加入
		function add(){
			ajax("../mihushop/Json/index-img-lb1.json?t=" + new Date().getDate(),function(str){
				let arr = (new Function("return" + str))();
				//console.log(arr);
				for( let i = 0;i < arr.length;i ++ ){
					console.log(oImg[i]);
					if(oImg[i].src == #){
						oImg[i].src = arr[i];
					}
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
*/		
		
		topli(oTopLi1,oBtnLeft[0],oBtnRight[0]);
		topli(oTopLi2,oBtnLeft[1],oBtnRight[1]);
		topli(oTopLi3,oBtnLeft[2],oBtnRight[2]);
		topli(oTopLi4,oBtnLeft[3],oBtnRight[3]);
		
		function topli(obj,obj2,obj3){
			var nowIndex = 0;
			var zIndex = 1;
			var timer = null;
			init();
			autoPlay();
			enter(oBox1);
			enter(oBox2);
			enter(oBox3);
			enter(oBox4);
			obj2.onclick = function(){
				nowIndex --;
				if(nowIndex < 0){
					nowIndex = obj.length - 1;
				}
				init();
			}
			obj3.onclick = function(){
				nowIndex ++;
				if(nowIndex > obj.length - 1){
					nowIndex = 0;
				}
				init();
			}
			
			
			function init(){
				obj[nowIndex].style["z-index"] = ++ zIndex;
	/*
	 * 			for(var i = 0;i < 6;i ++){
					oBottomLi[i].style.backgroundColor = "#ccc";
				}
				oBottomLi[nowIndex].style.backgroundColor = "#EE2346";
	*/			
			}
			
			
			function autoPlay(){
				timer = setInterval(function(){
					nowIndex ++;
					if(nowIndex > obj.length-1){
						nowIndex = 0;
					}
					init();
				},2500);
			}
		
			function enter(obj1){
				obj1.onmouseenter = function(){
					clearInterval(timer);
				}
				obj1.onmouseleave = function(){
					autoPlay();
				}
			}
		}	
	}
	return {
		lb2 : lb2
	}
})		