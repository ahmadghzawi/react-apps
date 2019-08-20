import React, { Component } from 'react';

class NavBar extends Component {

    render() { 
    console.log('NavBar - Rendered');
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand font-weight-bold">
                Items {" "} 
                <span className="badge badge-pill badge-secondary">
                    {this.props.totalCounters}
                </span>
            </a>
            </nav>
         );
    };

}

//Stateless Functional Component (you CAN NOT use life cycle hooks in stateless Functional Component)
// const NavBar = ({totalCounters}) => {
//     console.log('NavBar - Rendered');
//     return ( 
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="#">
//                 Navbar {" "} 
//                 <span className="badge badge-pill badge-secondary">
//                     {totalCounters}
//                 </span>
//             </a>
//         </nav>
//      );
// }
 
export default NavBar;