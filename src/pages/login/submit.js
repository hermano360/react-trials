// import { SubmissionError } from 'redux-form'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  console.log(values);
  //   var xhttp = new XMLHttpRequest();
  // xhttp.open("POST", "https://budsy-staging.mybluemix.net/api/v0/auth/customer/email/login/", true);
  // xhttp.setRequestHeader("Content-type", "application/json");
  // xhttp.send("username=Henry&password=Ford");

// var data = null;
var data = JSON.stringify(values)
var xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    // console.log(response);
    var response = this.responseText;    
    console.log(response);
    if(response.indexOf('non_field_errors') >= 0){
      console.log('failed');      
    }else{
      console.log('success');
    }
  }
});
xhr.open("POST", "https://budsy-staging.mybluemix.net/api/v0/auth/customer/email/login/");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "90cc398f-3d59-6cd7-b4b7-9511b0441c5c");
xhr.send(data);
}

export default submit