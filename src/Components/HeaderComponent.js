import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink, } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    render () {
        return(
            <Navbar dark sticky="top" expand>
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link text-dark display-4" href="/projects">
                                    <i className="fa fa-home fa-lg" />Brendon Wilcox
                                </NavLink>
                            </NavItem>
                            <NavItem className="vertCenter pt-3">
                                <NavLink className="nav-link text-dark" to="/aboutme" href="/aboutme/">
                                    <i className="fa fa-home fa-lg" /> About Me
                                </NavLink>
                            </NavItem>
                            <NavItem className="vertCenter pt-3">
                                <NavLink className="nav-link text-dark" to="/projects" href="/projects">
                                    <i className="fa fa-home fa-lg" /> Projects
                                </NavLink>
                            </NavItem>
                        </Nav> 
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;