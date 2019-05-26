//返回属性值
function getStyle(obj,attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
//AJAX数据交互
// function ajax(method, url, data, success){

// 	var xhr = null;
	
// 	try{
// 		xhr = new XMLHttpRequest();
// 	} catch(e) {
// 		xhr = new ActiveXObject('Microsoft.XMLHTTP');
// 	}

// 	if( method == 'get' && data) {
// 		url += '?' + data;
// 	}

// 	xhr.open(method,url,true);
// 	if( method == 'post' ){
// 		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
// 		xhr.send(data);
// 	}

// 	xhr.onreadystatechange = function() {
// 		if( xhr.readyState == 4 ) {
// 			if( xhr.status == 200 ) {
// 				success && success(xhr.responseText);
// 			}
// 			else {
// 				alert('出错咯：' + xhr.status);
// 			}
// 		}
// 	}
// }
function ajax(method, url, data, success) {
	var xhr = null;
	try {
		xhr = new XMLHttpRequest();
	} catch (e) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	if (method == 'get' && data) {
		url += '?' + data;
	}
	
	xhr.open(method,url,true);
	if (method == 'get') {
		xhr.send();
	} else {
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}
	
	xhr.onreadystatechange = function() {
		
		if ( xhr.readyState == 4 ) {
			if ( xhr.status == 200 ) {
				success && success(xhr.responseText);
			} else {
				alert('出错了,Err：' + xhr.status);
			}
		}
		
	}
}