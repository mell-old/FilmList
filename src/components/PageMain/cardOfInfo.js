import React, {Component} from 'react'
import {Button, Card, Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import api from "../../actions/articleAPI";
import { saveJson } from '../../actions/saveJson'

class CardOfInfo extends Component{
    save (props) {
        console.log('props.file', props.file)
        return saveJson(props, props.name)
    }
    render(){
        return(
            <Card className="col-sm-11 col-md-3 ml-md-5 my-5" key={this.props.id}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <div className="row justify-content-around my-3">
                        <Card.Subtitle className="text-muted p-2">Рік публікації: {this.props.year}</Card.Subtitle>
                        <Card.Subtitle className="text-muted p-2">Формат: {this.props.format}</Card.Subtitle>
                    </div>
                    <Card.Text>
                        <h6 className="text-center">Список авторів:</h6>
                        <p>{this.props.stars}</p>
                    </Card.Text>
                    <Row>
                        <Col>
                            <Button onClick={()=> {this.props.onDelete(this.props.id, this.props.name)}} variant="outline-info">Видалити</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => this.save(this.props)} variant="outline-info">Завантажити</Button>
                        </Col>
                    </Row>
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
        onDelete: (id, name) =>
        {
            alert(`${name} is deleted`);
            dispatch(api.deleteArticle(id));
        }
    })
)(CardOfInfo);