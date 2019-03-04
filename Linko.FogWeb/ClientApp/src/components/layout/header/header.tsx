import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faCog, faQuestionCircle, faUser} from '@fortawesome/free-solid-svg-icons'
 
import '../layout.scss';
import './header.scss';
interface Props {
}
export default class Header extends React.Component<Props, any>  {
    constructor(props: Props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header>
                <Navbar className="navbar navbar-expand-sm navbar-toggleable-sm border-bottom mb-0" light >
                    <Container>
                        <img alt="Logo"  height="35" role="img" src='/assets/img/linko.svg' width="200" />
                        <NavbarBrand tag={Link} to="/">FogWeb</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <div className="menu-item">
                                        <FontAwesomeIcon icon={faSearch} className='menu-icon' />
                                        <NavLink tag={Link} className="header-text" to="/counter">Search</NavLink>
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <div className="menu-item">
                                        <FontAwesomeIcon icon={faBell} className='menu-icon' />
                                        <NavLink tag={Link} className="header-text" to="/fetch-data">Notices</NavLink>
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <div className="menu-item">
                                        <FontAwesomeIcon icon={faCog} className='menu-icon' />
                                        <NavLink tag={Link} className="header-text" to="/about">Settings</NavLink>
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <div className="menu-item">
                                        <FontAwesomeIcon icon={faQuestionCircle} className='menu-icon' />
                                        <NavLink tag={Link} className="header-text" to="/about">Help</NavLink>
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <div className="menu-item"> 
                                        <NavLink tag={Link}  to="/about"> <FontAwesomeIcon icon={faUser} className='menu-icon' /></NavLink>
                                    </div>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
