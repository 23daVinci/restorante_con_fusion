import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantName: "Restorante Con Funsion"
        };
    }

    render() {
        return(
            <Navbar color="danger" dark expand="md">
                <div className="container">
                    <NavbarBrand href="/"><h1 style={{color:"white"}}>{ this.state.restaurantName }</h1></NavbarBrand>
                </div>
            </Navbar>
        );
    }
}

export default NavbarComponent;