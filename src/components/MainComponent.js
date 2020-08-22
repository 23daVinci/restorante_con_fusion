import React, { Component } from 'react';
import Menu from './MenuComponent';
import NavbarComponent from './NavbarComponent';
import Home from "./HomeComponent";
import DishDetails from "./DishdetailComponent";
import Contact from './ContactUs';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import About from './AboutComponent';
import { addComment } from '../redux/ActionCreators';

// pass in the store-state values to props
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return(
        <Home 
            dish={this.props.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    // componet to render selected dish
    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment} />
      );
    };

    return (
      <div>
        <NavbarComponent />
        <div className="container">
        </div>
        <Switch>
          <Route path="/home" component={ HomePage } />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={ DishWithId } />
          <Route exact path="/contactUs" component={ Contact } />
          <Route exact path="/aboutUs" component={() => <About leaders={this.props.leaders}/>} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
