
ajax('get', 'Data/data.php', '', function(data) {
	var data = JSON.parse(data);
	// for(var p in data){
	// 	for(var j in data[p]){
	// 		获取key
	// 		console.log(j);	
	// 		获取value
	// 		console.log(data[p][j]);
	// 	}
	// }
	var oRight = document.getElementById('right');

	for(var i = 0; i < data.length; i++ ) {

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
});