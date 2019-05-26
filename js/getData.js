
ajax('get', 'Data/data.php', '', function(data) {
	var data = JSON.parse(data);

	// foot页数控制
	var oFoot = document.getElementById('foot');
	var oFootUl = oFoot.getElementsByTagName('ul')[0];
	var p = 0;
	p = Math.ceil( data.length / 9);

	for(var i = 0; i < p; i++ ) {

		var j = i + 1;
		var li = document.createElement('li');
		li.innerText = j;

		oFootUl.insertBefore(li,oFootUl.children[oFootUl.children.length-1]);
	}

	//异步修复、重新给foot的li元素设置样式
	oFootUl.children[0].style.marginRight = '5px';
	for( var i = 1; i < p+1; i++ ) {

		oFootUl.children[i].style.marginRight = '10px';
	}
	//异步修复、重新给foot底部页数定位
	oFootUl.style.marginLeft = ( - ( parseInt(getComputedStyle(oFootUl)['width']) / 2  ) ) + 'px';


	var oRight = document.getElementById('right');

	//初始化文章内容
	refreshData(1);
	//用户手动切换文章内容
	for( var i = 1; i < p+1; i++ ) {

		oFootUl.children[i].index = i;
		oFootUl.children[i].onclick = function() {

			while(oRight.children.length){
				oRight.removeChild(oRight.children[0]);
			}
			refreshData(this.index);
		}
	}


	function refreshData(p){

		// 设置一些控制文章显示数量的属性
		var len = 9;
		var maxLen = len - (data.length % len);
		var page = p;
		var pageMixData = page*len;
		var pageMaxData = page*len;
		//限制第一页最大显示文章数量
		if( data.length < len && data.length%len != 0) {
			pageMaxData = data.length;
			pageMixData = len;
		}
		//限制最后一页最大显示文章数量
		if( data.length%page != 0) {
			pageMaxData = pageMaxData - maxLen;
			pageMixData = pageMaxData + (data.length%len);

		}
		console.log(p+':'+pageMixData+':'+pageMaxData);
		
		// 将php的文章内容添加到html文档
		for(var i = 0 + pageMixData - len; i < pageMaxData; i++ ) {

			var html = '';
			var k = '';
			varv = '';

			for(var p in data[i]) {

				k = p;
				v = data[i][p];

				v = v.slice(0,140) + '......';
			}
			html = '<li><h3>'+k+'</h3><p>'+v+'</p><a href="#" rel = "更多">>更多</a></li>'
			oRight.innerHTML += html;
		}
	}

	});
	