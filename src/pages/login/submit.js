// import { Redirect } from 'react-router-dom';

function submit(values) {
  console.log(values);
  var data = JSON.stringify(values)
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      // console.log(response);
      var response = this.responseText;
      if(response.indexOf('non_field_errors') >= 0){
        console.log(JSON.parse(response).non_field_errors[0]);
      }else{
        window.location.href = '/sms-verification';//in future change to order
        localStorage.setItem('userAuthToken', JSON.parse(response).auth_token);
      }
    }
  });
  xhr.open("POST", "https://budsy-staging.mybluemix.net/api/v0/auth/customer/email/login/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(data);
}

export default submit