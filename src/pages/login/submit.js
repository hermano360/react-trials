// import { Redirect } from 'react-router-dom';
import global from '../../components/common';

function submit(values) {
  document.getElementById("_loader").className = '_show';
  var data = JSON.stringify(values)
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      if(this.status === 400){
        global.globalErrorHandling("Internal Server Error. Please try again.");
      }else{
        var response = this.responseText;
        if(response.indexOf('non_field_errors') >= 0){
          global.globalErrorHandling(JSON.parse(response).non_field_errors[0]);          
        }else{
          window.location.href = '/';//in future change to order
          localStorage.setItem('userAuthToken', JSON.parse(response).auth_token);
          document.getElementById("_loader").className = '';
        }
      }      
    }
  });
  xhr.open("POST", "https://budsy-staging.mybluemix.net/api/v0/auth/customer/email/login/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(data);
}

export default submit;