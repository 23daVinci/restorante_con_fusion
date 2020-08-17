import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import NavbarComponent from './NavbarComponent';
import DishDetails from './DishdetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({
        selectedDish: dishId
    });
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container">
          <h1 className="mt-5">Menu</h1>
        </div>
        <Menu dishes={ this.state.dishes } onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetails dishSelected={ this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } />
      </div>
    );
  }
}

export default Main;
