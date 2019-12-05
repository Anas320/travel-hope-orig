import * as React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Body from "./Body.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Confirmation from "./Confirmation.js";
import Booking from "./Booking.js";
import Hotels from "./Hotels.js";
import Detail from "./Detail.js";
import axios from "axios";

class App extends React.Component {
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
  render() {
console.log(process.env)
    return (
      <div>
        <Router>
          <div>
            <script
              type="text/javascript"
              src="js/jquery-2.2.4.min.js"
            ></script>
            <script type="text/javascript" src="js/plugins.js"></script>
            <script type="text/javascript" src="js/custom-core.js"></script>

            <script
              type="text/javascript"
              src="js/plugins/jquery.typeahead.min.js"
            ></script>
            <script
              type="text/javascript"
              src="js/custom-autocomplete.js"
            ></script>
            <meta charSet="utf-8" />

            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {/* Title Of Site */}
            <title>
              Travel Material - Resposnive HTML Template for Travel Booking
              Based on Bootstrap 4.x.x
            </title>
            <meta
              name="description"
              content="Resposnive HTML Template for Travel Booking Based on Bootstrap 4.x.x"
            />
            <meta
              name="keywords"
              content="accommodation, booking, holiday, hostel, hotel, motel, reservation, resort, tour, tourism, travel, travel agency, trip, vacation, flight, guide, journey, rental, destination, travel booking"
            />
            <meta name="author" content="crenoveative" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            {/* Fav and Touch Icons */}
            <link
              rel="apple-touch-icon-precomposed"
              sizes="144x144"
              href="images/ico/apple-touch-icon-144-precomposed.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="114x114"
              href="images/ico/apple-touch-icon-114-precomposed.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              sizes="72x72"
              href="images/ico/apple-touch-icon-72-precomposed.png"
            />
            <link
              rel="apple-touch-icon-precomposed"
              href="images/ico/apple-touch-icon-57-precomposed.png"
            />
            <link rel="shortcut icon" href="images/ico/favicon.png" />
            {/* Font face */}
            <link
              href="https://fonts.googleapis.com/css?family=Aleo:300,300i,400,400i,700,700i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
              rel="stylesheet"
            />
            {/* CSS */}
            <link href="css/font-icons.css" rel="stylesheet" />
            <link
              rel="stylesheet"
              type="text/css"
              href="bootstrap/css/bootstrap.min.css"
              media="screen"
            />
            <link href="css/animate.css" rel="stylesheet" />
            <link href="css/main.css" rel="stylesheet" />
            <link href="css/plugin.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <link href="css/your-style.css" rel="stylesheet" />
            {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
            {/*[if lt IE 9]>

  <![endif]*/}
          </div>
          <div>
            <Header />

            <Route exact path="/" component={Body} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/Booking" component={Booking} />
            <Route path="/detail" component={Detail} />
            
            <Route path="/hotels/:city/:startDate/:endDate/:children/:adults" component={Hotels} />

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;



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











