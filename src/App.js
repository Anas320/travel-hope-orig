import React, { Suspense } from 'react';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Body from "./Body.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Confirmation from "./Confirmation.js";
import Booking from "./Booking.js";
import Hotels from "./Hotels.js";
import Detail from "./Detail.js";
import axios from "axios";
import dotenv from 'dotenv';
//import {connect} from 'react-redux'



require('dotenv').config()

//import { withTranslation } from 'react-i18next';

class App extends React.Component {
state = { message: 1,
  curr: 'USD'

 }



  componentDidMount(){

    
  }
  // componentDidMount() {
  //   axios
  //     .get("https://bookingengine.co/api/hotels/search", {
  //       params: {
  //         ota_id: "172a7bc0-d892-11e9-ad7d-8d041c8c7592",
  //         checkin: "2019-10-10",
  //         checkout: "2019-10-30",
  //         city: "Lahore",
  //         vendor: 3,
  //         adults: 2,
  //         children: 1,
  //         currency: "USD",
  //         ip_addres: "103.255.6.76"
  //       }
  //     })
  //     .then(function(response) {
  //       //console.log(response);
  //       console.log(5)
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  callbackFunction = (childData, curr) => {
      this.setState({
        message: childData,
        curr: curr
      })
}


  render() {
console.log(this.props)


//console.log(process.env)
    return (
      <div>{console.log(process.env.REACT_APP_CURRENCY)}
     
        <Router>
          
          <div>
            <Header parentCallback = {this.callbackFunction} />
            {console.log(this.state.message)}

            <Route exact path="/" component={Body} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/Booking" component={Booking} />
            <Route path="/detail" component={Detail} />
            
            <Route exact path="/hotels/:city/:startDate/:endDate/:children/:adults" render={()=><Hotels currency={this.state.message} curr={this.state.curr} />} />
            <Route path="/hotels/detail/:startDate/:endDate/:id" component={Detail} />

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}


// const myState = state => {
//   return {
//     myname: state.name
//   };
// };

export default App;

//export default App;



// import React from 'react'

// class App extends React.Component{

//   constructor () {
//     super();
//     this.state = {
//       email: '',
//       password: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange (evt) {
//     // check it out: we get the evt.target.name (which will be either "email" or "password")
//     // and use it to target the key on our `state` object with the same name, using bracket syntax
//     this.setState({ [evt.target.name]: evt.target.value });
// console.log(this.state.email)  
//   }
//   render(){

//     return(
// <div>
//   <input type="text" id = "pakistan" name="email"  onChange = {this.handleChange}  />
//   <input type="text" id = "paki" name="password"  onChange = {this.handleChange}  /> 

// </div>
//       )
//   }
// }

// export default App;








// import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
// import { withTranslation } from 'react-i18next';
// import i18next from 'i18next';

// class App extends Component {
// constructor (props){
// super(props);

// this.state = {
//   lang: 'en'
// }
// this.handleClick = this.handleClick.bind(this)
// }
//   handleClick(evt) {
//     i18next.changeLanguage(evt.target.value)
    
//   }
  
//   render() {
//     const { t } = this.props;

//     return (
//       <div className="App">


//       <select defaultValue='chi' onChange={this.handleClick}>
        

        
//         <option value = 'ko'>Korean</option>
//         <option value = 'chi'>Chinese</option>
//         <option value = 'en' >English</option>

//       </select>
        
          
        
        
//             <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3>
          
//       </div>
//     )
//   }
// }

// export default withTranslation()(App);


