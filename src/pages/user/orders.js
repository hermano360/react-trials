import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Hamburger from '../user/hamburger';

// var authToken = 'Token 1901f18975806d824d42f98b01dec42c2ef6217c';
class Orders extends Component{
  constructor(props) {
    super(props); 
    this.state = {     
      
    };    
  }    
  componentDidMount(){
    
  }   
  componentWillMount(){
    
    
  } 
  render(){
    return(
      <div className='content _user_screen _order_screen' id="myOrders">  
        <div className="_hamburger" onClick={Hamburger}><span className="_top_line"></span><span className="_middle_line"></span><span className="_bottom_line"></span></div> 
        <h1 className='heading'>My Order</h1>
        <div className="inner_content"> 
          <div className="_delivery_tracker">
            <h2>Delivery Status</h2>
            <ul>
              <li className="_current">Verifying Medical Status</li>
              <li className="_current">Routing Courier</li>
              <li>In Transit to Access Point</li>
              <li>In Transit to Patient</li>
              <li>Order Complete</li>
            </ul>
          </div>
          <div className="_payment_info">
            <h2>Payment</h2>
            <p>
              Subtotal: $30<br />
              Sales Tax: $3<br />
              Delivery Charge: $7<br />
              Order Total: $40
            </p>
          </div>
        </div>                        
      </div>
    )      
  }   
}
export default Orders;