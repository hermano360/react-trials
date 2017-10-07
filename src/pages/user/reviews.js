import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Hamburger from '../user/hamburger';

class MyPreferencesPage extends Component{
  constructor(props) {
    super(props);
    // console.log(props);  
    this.state = {     
      
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    
  }
  componentDidMount(){
    // console.log(this.state.shiv)
    var acc = document.getElementsByClassName("_accordian_trigger");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      }
    }
  }   
  render(){
    return(
      <div className='content _user_screen' id="myReviews">  
        <div className="_hamburger" onClick={Hamburger}><span className="_top_line"></span><span className="_middle_line"></span><span className="_bottom_line"></span></div> 
        <h1 className='heading'>My Reviews</h1>
        <div className="inner_content"> 

          <div className="_accordian">
            <div className="_accordian_trigger">
              <p className="_r_date">08.07.2017</p>
              <p className="_r_order_no">Order 001</p>
              <p className="_ratings _r_rating">
                <span className="_empty">
                <i></i><i></i><i></i><i></i><i></i>
                </span>
                <span className="_fill">
                <i></i><i></i><i></i><i></i><i></i>
                </span>
              </p>
            </div>
            <div className="_accordian_content">
              <ul>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
              </ul>
              <p className="_r_description">"This smoke was awesome. The taste and harshness was perfect."</p>
            </div>
            <div className="_accordian_trigger">
              <p className="_r_date">08.07.2017</p>
              <p className="_r_order_no">Order 002</p>
              <p className="_ratings _r_rating">
                <span className="_empty">
                <i></i><i></i><i></i><i></i><i></i>
                </span>
                <span className="_fill">
                <i></i><i></i><i></i><i></i><i></i>
                </span>
              </p>
            </div>
            <div className="_accordian_content">
              <ul>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
              </ul>
              <p className="_r_description">"This smoke was awesome. The taste and harshness was perfect."</p>
            </div>
            <div className="_accordian_trigger">
              <p className="_r_date">08.07.2017</p>
              <p className="_r_order_no">Order 003</p>
              <p className="_ratings _r_rating">
                <span className="_empty">
                <i></i><i></i><i></i><i></i><i></i>
                </span>
                <span className="_fill">
                <i></i><i></i><i></i><i></i><i></i>
                </span>
              </p>
            </div>
            <div className="_accordian_content">
              <ul>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill" style={{width: '30%'}}>
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
              </ul>
              <p className="_r_description">"This smoke was awesome. The taste and harshness was perfect."</p>
            </div>
            <div className="_accordian_trigger">
              <p className="_r_date">08.07.2017</p>
              <p className="_r_order_no">Order 004</p>
              <p className="_ratings _r_rating">
                <span className="_empty">
                <i></i><i></i><i></i><i></i><i></i>
                </span>
                <span className="_fill">
                <i></i><i></i><i></i><i></i><i></i>
                </span>
              </p>
            </div>
            <div className="_accordian_content">
              <ul>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
                <li>
                  <p className="_ratings _r_rating">
                    <span className="_empty">
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                    <span className="_fill" style={{width: '30%'}}>
                    <i></i><i></i><i></i><i></i><i></i>
                    </span>
                  </p>
                  <p className="_ratings_title">Smoke</p>
                </li>
              </ul>
              <p className="_r_description">"This smoke was awesome. The taste and harshness was perfect."</p>
            </div>
          </div>
        </div>                        
      </div>
    )      
  } 
  handleSubmit(){
    
  } 
}
export default MyPreferencesPage;