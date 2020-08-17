import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

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
function RenderComments({ dish }) {
    // serialize comments
    const comments = dish.comments.map((commentDetail) => {
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
        if (props.dishSelected != null) {
            // serialize comments
            props.dishSelected.comments.map((commentDetail) => {
                return (
                    <div className="container">
                        <p>{ commentDetail.comment }</p>
                        <p>-- { commentDetail.author }</p>
                    </div>
                );
            });

            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dishSelected} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments dish={props.dishSelected} />
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