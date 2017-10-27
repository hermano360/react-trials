var global = {	
	'globalErrorHandling': function(response){
		document.getElementById("_global_errors").innerHTML = response;
        document.getElementById("_global_errors").className = '_global_errors';
        document.getElementById("_loader").className = '';
        setTimeout(function(){
          document.getElementById("_global_errors").className = '';
        }, 2000);
	}
}

export default global;