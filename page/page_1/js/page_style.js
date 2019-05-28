
	var oBigBackground = document.getElementById('bigBackground');
	var oHead = document.getElementById('head');
	var oData = document.getElementById('data');
	var page = parseInt(window.location.hash.slice(1,2));
	var oLyb = document.getElementById('lyb');
	var oTitle = document.getElementsByTagName('title')[0];

	//head文字下划线动画
	var Home = oHead.children[0];
	Home.onmouseover = function() {
		Home.nextElementSibling.style.width = '94px';
	}
	Home.onmouseout = function() {
		Home.nextElementSibling.style.width = '0';
	}
	//点击head返回首页
	Home.onclick = function(){
		window.location = '../../';
	}

	//head搜索框
	var searchBox = oHead.children[2];
	promptDisplay(searchBox, '新世界的大门...');

	//留言板输入框
	var text = oLyb.children[0];
	promptDisplay(text, '留下点什么吧...');

	
	
	//设置文章内容
	ajax('get', 'data.php', '', function(data){
	
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

		oData.children[0].innerText = title[page];
		oData.children[2].innerHTML = contents[page];

		//设置网页标题
		oTitle.innerText = title[page];
	});