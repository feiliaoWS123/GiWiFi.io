//成功案例tab栏切换

window.onload = function() {
	var aa = document.getElementById("li").getElementsByTagName("a");
	var items = document.getElementsByClassName("zrk33");
	var a;
	console.log(aa.length); 
	for(var i = 0; i < aa.length; i++) {
		aa[i].index = i; //就是这行是重点了，分别赋予每个li的index值。
		aa[i].onclick = function(e) {
			a = this.index;
			console.log(a);
			for(var j = 0; j < aa.length; j++) {
				aa[j].setAttribute("class", "");
			}

			for(var k = 0; k < items.length; k++) {
				items[k].style.display = "none";
			}
			aa[a].setAttribute("class", "active")
			items[a].style.display = "block";
		}
	}
}