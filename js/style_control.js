
	var oBigBackground = document.getElementById('bigBackground');
	var oHead = document.getElementById('head');
	var oBody = document.getElementById('body');
	var oLeft = document.getElementById('left');
	var oRight = document.getElementById('right');
	var oFoot = document.getElementById('foot');

	//head文字下划线动画
	var underLine = oHead.children[0];
	underLine.onmouseover = function() {
		underLine.nextElementSibling.style.width = '94px';
	}
	underLine.onmouseout = function() {
		underLine.nextElementSibling.style.width = '0';
	}
	//head搜索框
	var searchBox = oHead.children[2];
	searchBox.onfocus = function(){
		if( searchBox.value == '新世界的大门...' ) {
			searchBox.value = '';
		}
	}
	searchBox.onblur = function(){
		if( searchBox.value == '' ) {
			searchBox.value = '新世界的大门...';
		}
	}

	//head高度自适应
	if ( getComputedStyle(oHead)['height'] < getComputedStyle(oHead.children[0])['height']) {
		oHead.style.height = getComputedStyle(oHead.children[0])['height'];
	}
	//body高度自适应
	oBody.style.height = getComputedStyle(oLeft)['height'] < getComputedStyle(oRight)['height'] ? getComputedStyle(oLeft)['height'] : getComputedStyle(oRight)['height'];

	//foot位置自适应
	// oFoot.style.top = parseInt(getComputedStyle(oRight)['height']) + parseInt(getComputedStyle(oBody)['top']) + 'px';
	oFoot.style.top = '1100px';
	//foot底部页数定位
	var oFootUl = oFoot.getElementsByTagName('ul')[0];
	oFootUl.style.marginLeft = ( - ( parseInt(getComputedStyle(oFootUl)['width']) / 2  ) ) + 'px';
	//foot高度自适应
	oFoot.style.height = getComputedStyle(oFootUl)['height'];
	// console.log('height:' + getComputedStyle(oRight)['height']);

	//背景模糊
	var blur = 0;
	document.onscroll = function(ev) {
		var pos = oBody.getBoundingClientRect();
		if( pos.top > 0 ) {
			blur = ( ( 320 - pos.top ) / 320 ) * 10;
			blur = Math.round(blur*100)/100;
			oBigBackground.style.filter = 'blur('+blur+'px)';
		}
	}
	//right文章字数限制
	var p = oRight.getElementsByTagName('p');
	for( var i = 0; i < p.length; i++ ) {
		p[i].innerText = p[i].innerText.slice(0,140) + '......';
	}
	document.onclick = function() {

		// window.location.href = '#';
		
		// console.log(window.history.length);
		// var stateObj = { foo: "bar"};
		// history.pushState(stateObj, "", "page/page_1/index.html");
	}