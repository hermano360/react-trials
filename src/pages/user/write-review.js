import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Hamburger from '../user/hamburger';
import StarRatings from '../star-ratings/star-ratings';

var authToken = 'Token ' + localStorage.getItem('userAuthToken');
class MyPreferencesPage extends Component{
  constructor(props) {
    super(props); 
    this.state = {     
      smokeRating: 3,
      overallRating: 3,
      harshness: "",
      high: "",
      buzzwords: [
        {
          "words": [
              "Buzzword",
              "Buzzword 2"              
          ],
          "category": "Category Name"
        }
      ],
      buzzwordStatus: 'buzzwordsLoading'
    };
    this.changeSmokeRating = this.changeSmokeRating.bind(this);
    this.changeOverallRating = this.changeOverallRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.harshness = this.harshness.bind(this);
    this.high = this.high.bind(this);
  }  
  changeSmokeRating( newRating ) {
    this.setState({
      smokeRating: newRating
    });
  }
  changeOverallRating( newRating ) {
    this.setState({
      overallRating: newRating
    });
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
        var buzz = JSON.parse(this.responseText).data;
        for(var i = 0; i < buzz.length; i++) {
          var obj = buzz[i];
          if(obj.category === 'negatives'){
            buzz.splice(i,1);
          }            
        }
        _this.setState({buzzwords: buzz, buzzwordStatus: 'buzzwordsLoaded'});
      }
    });

    xhr.open("GET", "https://budsy-staging.mybluemix.net/api/v0/customer/utils/buzzword/");
    xhr.setRequestHeader("authorization", authToken);
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);   
    
  }  
  harshness(e){
    this.setState({harshness: e.target.firstChild.nodeValue})
  }
  high(e){
    this.setState({high: e.target.firstChild.nodeValue})
  }
  render(){
    var buzzwords = this.state.buzzwords;
    return(
      <div className='content _user_screen' id="myReviews">  
        <div className="_hamburger" onClick={Hamburger}><span className="_top_line"></span><span className="_middle_line"></span><span className="_bottom_line"></span></div> 
        <h1 className='heading'>My Reviews</h1>
        <div className="inner_content"> 
          <div className="write_review">
            <p>Based on your latest high, can you rate based on the settings below to ensure your next high is even more perfect to you.</p>
            <div className="_reviews-fieldset">
              <ul>
                <li className="smoke clearfix">
                  <h3>Smoke</h3>
                  <StarRatings
                    rating={this.state.smokeRating}
                    isSelectable={true}
                    isAggregateRating={false}
                    changeRating={this.changeSmokeRating}
                    numOfStars={ 5 }
                    starSelectingHoverColor="#ffb200"
                    starRatedColor="#ffb200"
                    starEmptyColor="#413e53"
                    starWidthAndHeight="18px"
                    starSpacing="1px"
                  />
                </li>
                <li className="_options_box">
                  <ul className="clearfix">
                    <li>
                      <input type="radio" value="smooth" name="harshness" id="smooth" />
                      <label htmlFor="smooth" onClick={this.harshness}>Smooth</label>
                    </li>
                    <li>
                      <input type="radio" value="harsh" name="harshness" id="harsh" />
                      <label htmlFor="harsh" onClick={this.harshness}>Harsh</label>
                    </li>
                  </ul>
                </li>
                <li className="_options_box _high_options">
                  <h3>High</h3>
                  <ul className="clearfix">
                    <li>
                      <input type="radio" value="body" name="high" id="body" />
                      <label htmlFor="body" onClick={this.high}>Body</label>
                    </li>
                    <li>
                      <input type="radio" value="head" name="high" id="head" />
                      <label htmlFor="head" onClick={this.high}>Head</label>
                    </li>
                  </ul>
                </li>
                <li className="overall clearfix">
                  <h3>Overall Experience</h3>
                  <StarRatings
                    rating={this.state.overallRating}
                    isSelectable={true}
                    isAggregateRating={false}
                    changeRating={this.changeOverallRating}
                    numOfStars={ 5 }
                    starSelectingHoverColor="#ffb200"
                    starRatedColor="#ffb200"
                    starEmptyColor="#413e53"
                    starWidthAndHeight="18px"
                    starSpacing="1px"
                  />
                </li>                
              </ul>             
              <div className="_options_box _buzzwords _review_buzzwords" id={this.state.buzzwordStatus}>
                <p>How would you describe your experience</p>
                  {buzzwords.map(function(name, i){
                    var blockClass = "_bw_block _" + name.category + "_block";
                    return <div key={name.category} className={blockClass}>
                      <h4>{name.category}</h4>
                      <ul className="clearfix">                     
                        {name.words.map(function(word, j){          
                            if(j <= 1){
                              return <li key={word}>
                                  <input type="checkbox" value={word} name="buzzwords" id={word} data-buzz-category={name.category} />
                                  <label htmlFor={word}>{word}</label>
                                </li> 
                            }
                        })}
                      </ul>
                      </div>                
                  })}     
              </div>    
              <div className="_additional_comments text-left">
                <h3>Additional Comments</h3>
                <textarea placeholder="Write your comments here..." />
              </div>            
              <a className="a-btn btn-green" onClick={this.handleSubmit}>Submit Review</a>
            </div>
          </div>
        </div>                
      </div>
    )      
  } 
  handleSubmit(){
    console.log(this.state)
  } 
}
export default MyPreferencesPage;