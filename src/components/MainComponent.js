import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import NavbarComponent from './NavbarComponent';
import Home from "./HomeComponent";
import DishDetails from "./DishdetailComponent";
import Contact from './ContactUs';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      selectedDish: null
    }
  }

  render() {
    const HomePage = () => {
      return(
        <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    // componet to render selected dish
    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
      <div>
        <NavbarComponent />
        <div className="container">
        </div>
        <Switch>
          <Route path="/home" component={ HomePage } />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={ DishWithId } />
          <Route exact path="/contactUs" component={ Contact } />
          <Route exact path="/aboutUs" component={() => <About leaders={this.state.leaders}/>} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
