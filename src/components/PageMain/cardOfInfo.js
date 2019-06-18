import React, {Component} from 'react'
import {Button, Card} from "react-bootstrap";
import {connect} from "react-redux";
import api from "../../actions/filmAPI";

class CardOfInfo extends Component{
    render(){
        return(
            <Card className="col-sm-11 col-md-3 ml-md-5 my-5" key={this.props.id}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <div className="row justify-content-around my-3">
                        <Card.Subtitle className="text-muted">Год выпуска: {this.props.year}</Card.Subtitle>
                        <Card.Subtitle className="text-muted">Формат: {this.props.format}</Card.Subtitle>
                    </div>
                    <Card.Text>
                        <h6 className="text-center">Список актеров:</h6>
                        <p>{this.props.stars}</p>
                    </Card.Text>
                    <Button onClick={()=> {this.props.onDelete(this.props.id)}} variant="outline-info">Видалити</Button>
                </Card.Body>
            </Card>
        );
    }
};

export default connect(
    state => ({
        state: state
    }),
    dispatch => ({
        onDelete: (id) =>
        {
            dispatch(api.deleteFilm(id));
        }
    })
)(CardOfInfo);