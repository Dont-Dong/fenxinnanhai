
//返回属性值
function getStyle(obj,attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

//AJAX数据交互
// function ajax(method, url, data, success){
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

//文本框提示内容的显示和隐藏的切换
function promptDisplay(obj,text){
	obj.onfocus = function(){

		if( obj.value == text ) {
			obj.value = '';
		}
	}
	obj.onblur = function(){
		if( obj.value == '' ) {
			obj.value = text;
		}
	}
}

//限制字符串内只存在第一第二次出现的 <br> 字符串
function limitBr(str){

	var str = str;
	var str1 = '';
	var str2 = '';
	var t = 0;

	for(var i = 0; i < str.length; i++ ) {
		if( str[i] == '<' && str.slice(i+1, i+4) == 'br>'){
			t += 1;
		}
		if( t > 1) {
			str2 += str[i];
		}
		if( t > 1 && str1 == '') {
			str1 = str.slice(0,i+4);
		} else continue;
	}

	if( t < 2 ){
		return str;
	}

	str2 = str2.replace(/<br>/g, ' ');
	str = str1 + str2;

	return str;
}