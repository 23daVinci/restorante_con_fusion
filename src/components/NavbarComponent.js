import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantName: "Restorante Con Funsion",
            isNavOpen: false
        };

        // binding
        this.ToggelNav = this.ToggelNav.bind(this);
    }

    ToggelNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={ this.ToggelNav } />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" width="40" height="51" alt="REstorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={ this.state.isNavOpen    } navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"> Home </span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutUs">
                                        <span className="fa fa-info fa-lg"> About Us </span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"> Menu </span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactUs">
                                        <span className="fa fa-address-card fa-lg"> Contact Us </span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="col-12 col-sm-6">
                            <h1>Restorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default NavbarComponent;