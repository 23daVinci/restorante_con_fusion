import React, { Component } from 'react';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Menu from './MenuComponent';
import NavbarComponent from './NavbarComponent';
import Home from "./HomeComponent";
import DishDetails from "./DishdetailComponent";
import Contact from './ContactUs';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import About from './AboutComponent';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

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
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => { dispatch(fetchComments())},
  fetchPromos: () => { dispatch(fetchPromos())}

});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      return(
        <Home 
            dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
            dishesLoading = { this.props.dishes.isLoading }
            dishesErrMess = { this.props.dishes.errmess }
            promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
            promosLoading = { this.props.promotions.isLoading }
            promosErrMess = { this.props.promotions.errmess }
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    // componet to render selected dish
    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading = { this.props.dishes.isLoading }
            errMess = { this.props.dishes.errmess }  
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess = { this.props.comments.errmess }  
            postComment={this.props.postComment} />
      );
    };

    return (
      <div>
        <NavbarComponent />
        <div className="container">
        </div>
        <TransitionGroup>
          <CSSTransition key={ this.props.location.key } classNames="page" timeout={ 300 } >
            <Switch>
              <Route path="/home" component={ HomePage } />
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component={ DishWithId } />
              <Route exact path="/contactUs" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Route exact path="/aboutUs" component={() => <About leaders={this.props.leaders}/>} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
