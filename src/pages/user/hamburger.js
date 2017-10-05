function hamburger(){
	var _body = document.body;
	if(_body.className === ''){
		_body.className = '_sidebar-open';
	}else{
		_body.className = '';
	}
	
}

export default hamburger