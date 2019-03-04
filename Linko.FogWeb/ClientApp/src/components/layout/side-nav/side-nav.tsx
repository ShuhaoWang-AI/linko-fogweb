import React from 'react'; 
import { connect } from 'react-redux';
import { Link, NavLink,} from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, } from 'reactstrap';
import { type } from 'os';

import './side-nav.scss';
//import '../../../assets/css/ai.scss';

type Prop = {  
}

const SideNav = (props:Prop) => ( 
    <div className="left-nav border-right">    
        <NavLink className="link" activeClassName='active' to="/dashboard">Dashboard</NavLink>
        <NavLink className="link" activeClassName='active' to="/facilities">Facilities</NavLink>
        <NavLink className="link" activeClassName='active' to="/haulers">Haulers</NavLink>
        <NavLink className="link" activeClassName='active' to="/disposalsite">Disposal Sites</NavLink>
        <NavLink className="link" activeClassName='active' to="/guesstrips">Guesses Trips</NavLink>
            <br />
            <br /> 
        <NavLink  className="link" to="/notices">Notices</NavLink> 
        <NavLink  className="link" to="/reports">Reports</NavLink> 
    </div>   
);
export default SideNav;