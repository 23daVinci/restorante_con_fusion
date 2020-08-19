import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// render dish info
function RenderDish({ dish }) {
    return(
        <Card>
            <CardImg width="50%" object src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{ dish.name }</CardTitle>
                <CardText>{ dish.description }</CardText>
            </CardBody>
        </Card>
    );
}

// render comments
function RenderComments({ commentsList }) {
    // serialize comments
    const comments = commentsList.map((commentDetail) => {
        return (
            <div className="container">
                <p>{ commentDetail.comment }</p>
                <p>-- { commentDetail.author }</p>
            </div>
        );
    });
    
    return comments;
}

    const DishDetails = (props) => {
        console.log('dishDetail rendered')
        if (props != null) {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments commentsList={props.comments} />
                    </div>
                </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }

        
    }

export default DishDetails;