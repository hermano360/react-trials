import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Hamburger from '../user/hamburger';
import StarRatings from '../star-ratings/star-ratings';

var authToken = 'Token 1901f18975806d824d42f98b01dec42c2ef6217c';
class MyReviewsPage extends Component{
  constructor(props) {
    super(props); 
    this.state = {     
      feedback : [
        {
            "order_id": 1,
            "overall_rating": 5,
            "high": "body",
            "harshness": "harsh",
            "additional_comments": "it was a not quality product",
            "strainName": "strain 1",
            "created":"2017-10-30"
        },
        {
            "order_id": 2,
            "overall_rating": 2,
            "high": "body",
            "harshness": "harsh",
            "additional_comments": "shitty product",
            "strainName": "strain 1",
            "created":"2017-10-29"
        },
        {
            "order_id": 3,
            "overall_rating": 3,
            "high": "body",
            "harshness": "harsh",
            "additional_comments": "shitty product",
            "strainName": "strain 1",
            "created":"2017-10-28"
        }
      ],
      feedbackStatus: 'feedbackLoading'
    };    
  }    
  componentDidMount(){
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
  componentWillMount(){
    var _this = this;
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var feed = JSON.parse(this.responseText).data;  
        _this.setState({feedback: feed, feedbackStatus: 'feedbackLoaded'});
      }
    });

    xhr.open("GET", "https://budsy-staging.mybluemix.net/api/v0/customer/feedback/");
    xhr.setRequestHeader("authorization", authToken);
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data); 
    
  } 
  render(){
    var feedback = this.state.feedback;
    return(
      <div className='content _user_screen' id="myReviews">  
        <div className="_hamburger" onClick={Hamburger}><span className="_top_line"></span><span className="_middle_line"></span><span className="_bottom_line"></span></div> 
        <h1 className='heading'>My Reviews</h1>
        <div className="inner_content"> 
          <div className={this.state.feedbackStatus + ' _accordian'}>          
            {feedback.map(function(name, i){
              var created = name.created.split("T")[0];
              return <div key={'order' + name.order_id}>
                <div className="_accordian_trigger">
                  <p className="_r_date">{created}</p>
                  <p className="_r_order_no">Order {name.order_id}</p>
                  <div className="_ratings _r_rating">
                    <StarRatings
                        rating={name.overall_rating}
                        isSelectable={false}
                        isAggregateRating={false}
                        numOfStars={ 5 }
                        starSelectingHoverColor="#ffb200"
                        starRatedColor="#ffb200"
                        starEmptyColor="#413e53"
                        starWidthAndHeight="16px"
                        starSpacing="1px"
                      />
                  </div>
                </div>
                <div className="_accordian_content">
                  <ul>
                    <li>
                      <div className="_ratings _r_rating">
                        <StarRatings
                          rating={3}
                          isSelectable={false}
                          isAggregateRating={false}
                          numOfStars={ 5 }
                          starSelectingHoverColor="#ffb200"
                          starRatedColor="#ffb200"
                          starEmptyColor="#413e53"
                          starWidthAndHeight="14px"
                          starSpacing="1px"
                        />
                      </div>
                      <p className="_ratings_title">Smoke</p>
                    </li>
                    <li>
                      <div className="_ratings _r_rating">
                        <StarRatings
                          rating={2}
                          isSelectable={false}
                          isAggregateRating={false}
                          numOfStars={ 5 }
                          starSelectingHoverColor="#ffb200"
                          starRatedColor="#ffb200"
                          starEmptyColor="#413e53"
                          starWidthAndHeight="14px"
                          starSpacing="1px"
                        />
                      </div>
                      <p className="_ratings_title">Smoke</p>
                    </li>
                    <li>
                      <div className="_ratings _r_rating">
                        <StarRatings
                          rating={2}
                          isSelectable={false}
                          isAggregateRating={false}
                          numOfStars={ 5 }
                          starSelectingHoverColor="#ffb200"
                          starRatedColor="#ffb200"
                          starEmptyColor="#413e53"
                          starWidthAndHeight="14px"
                          starSpacing="1px"
                        />
                      </div>
                      <p className="_ratings_title">Smoke</p>
                    </li>
                  </ul>
                  <p className="_r_description">"{name.additional_comments}"</p>
                </div>
              </div>
            })}            
          </div>
        </div>                        
      </div>
    )      
  }   
}
export default MyReviewsPage;