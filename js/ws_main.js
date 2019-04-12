//首页轮播图
window.onload = function() {
	var ulLi = document.getElementsByClassName("ws_center_img");
	var olLi = document.getElementById("ws_ol").getElementsByTagName("li");
	var index = 0;
	var timer = setInterval(fun, 2000);

	function fun() {
		ulLi[index].style.display = "none";
		olLi[index].setAttribute("class", "");
		index++;
		if(index == 4) { 
			index = 0; 
		}
		ulLi[index].style.display = "block";
		olLi[index].setAttribute("class", "ws_active")
	}
	var a;
	for(var i = 0; i < olLi.length; i++) {
		olLi[i].index = i; //就是这行是重点了，分别赋予每个li的index值。
		olLi[i].onmouseover = function(e) {
			setInterval(timer);
			a = this.index;
			console.log(a);
			for(var j = 0; j < olLi.length; j++) {
				olLi[j].setAttribute("class", "");
			}

			for(var k = 0; k < ulLi.length; k++) {
				ulLi[k].style.display = "none";
			}
			olLi[a].setAttribute("class", "ws_active")
			ulLi[a].style.display = "block";
		}
	}
}



