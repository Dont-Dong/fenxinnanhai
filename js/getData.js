
ajax('get', 'Data/data.php', '', function(data) {

	//data数据处理	Key: 	类型 /s uid /s 标题 
	var data = JSON.parse(data);
	var type = [];
	var uid = [];
	var title = [];
	var contents = [];

	for(var i = 0; i < data.length; i ++ ) {

		for(var t in data[i]) {

			type.push(t.split('/s')[0]);
			uid.push(parseInt(t.split('/s')[1]));
			title.push(t.split('/s')[2]);
			contents.push(data[i][t]);
		}
	}

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

	//文章链接跳转
	var oRightli = oRight.getElementsByTagName('li');
	var goData = 0;

	for(var i = 0; i < oRightli.length; i++ ) {

		oRightli[i].children[0].index = i;
		oRightli[i].children[1].index = i;
		oRightli[i].children[2].index = i;
		oRightli[i].children[0].onclick = function() {

			goData = this.index;
			if( type[this.index] == 'article' ) {
				//page_1是跳转到文章阅读页面
				window.location = 'page/page_1' + '#' + uid[this.index];
			} else if( type[this.index] == 'demo' ) {
				//page_1是跳转到demo预览页面
				window.location = 'page/page_2' + '/' + contents[this.index];
			}
		}
		oRightli[i].children[1].onclick = oRightli[i].children[0].onclick;
		oRightli[i].children[2].onclick = oRightli[i].children[0].onclick;
	}


	//文章页数刷新
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
		// console.log(p+':'+pageMixData+':'+pageMaxData);
		
		// 将php的文章内容添加到html文档
		for(var i = 0 + pageMixData - len; i < pageMaxData; i++ ) {

			var html = '';
			var k = title[i];
			var v = contents[i];

			//right文章的标题和简述字数限制
			k = k.length > 26 ? k.slice(0,26) + '...' : k;
			if( type[i] == 'article' ) {

				//如果是文章类型就添加文章卡片
				v = v.length > 140 ? v.slice(0,140) + '......' : v;
				html = '<li><h3>'+k+'</h3><p>'+v+'</p><i>>更多</i></li>';
			} else if ( type[i] == 'demo' ) {

				//如果是demo类型就添加demo卡片
				k = k.length > 10 ? k.slice(0,10) + '...' : k;
				html = '<li><h3>'+k+'</h3><img src = img/thumb/th_'+v+'.png />'+'<i>>预览</i></li>';
			}

			oRight.innerHTML += html;
		}
	}

	});
	