import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { type } from 'os';

import './side-nav.scss';
//import '../../../components/assets/css/ai.css';

type Prop = {  
}

const SideNav = (props:Prop) => ( 
    <div className="left-nav border-right"> 
        <NavLink tag={Link} className="link" to="/dashboard">Dashboard</NavLink>
        <NavLink tag={Link} className="link" to="/facilities">Facilities</NavLink>
        <NavLink tag={Link} className="link" to="/haulers">Haulers</NavLink>
        <NavLink tag={Link} className="link" to="/disposalsite">Disposal Sites</NavLink>
        <NavLink tag={Link} className="link" to="/guesstrips">Guesses Trips</NavLink>
         
            <br />
            <br /> 
        <NavLink tag={Link} className="link" to="/notices">Notices</NavLink> 
        <NavLink tag={Link} className="link" to="/reports">Reports</NavLink> 
    </div>   
);

export default connect()(SideNav); 