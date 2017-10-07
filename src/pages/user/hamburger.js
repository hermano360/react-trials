function hamburger(){
	var _root = document.getElementsByTagName( 'html' )[0];
	if(_root.className === ''){
		_root.className = '_sidebar-open';
	}else{
		_root.className = '';
	}
	
}

export default hamburger