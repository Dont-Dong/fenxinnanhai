var text = document.getElementById('text');
var list = document.getElementById('list');
var btn = document.getElementById('btn');
var footer = document.getElementById('footer');

text.onkeyup = function() {

	if(text.value != ''){

		var script = document.createElement('script');
		//该链接在当前2019年5月10日有效
		script.src = 'https://www.baidu.com/sugrec?pre=1&prod=pc&from=wise_web&wd='+text.value+'&cb=miaov';
		document.body.appendChild(script);
		//footer
		footer.style.margin_top = '560px';
	} else {
		list.style.display = 'none';
	}
}
btn.onclick = function() {
	if(text.value != ''){
		window.open('https://www.baidu.com/s?wd='+text.value);
	}
}


function miaov(data) {

var list = document.getElementById('list');
var html = '';
if(data.g){//不知道为什么加上.length会报错

	list.style.display = 'block';
	for(var i = 0; i < data.g.length; i++) {
		var str = JSON.stringify(data.g[i]);
		var obj = JSON.parse(str);

		html += '<li><a href="https://www.baidu.com/s?wd='+obj.q+'">'+obj.q+'</a></li>';
	}
	list.innerHTML = html;

} else {

	list.style.display = 'none';
}
}
