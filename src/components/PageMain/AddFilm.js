import React, {Component} from 'react'
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {connect} from "react-redux";
import api from "../../actions/filmAPI";

class AddFilm extends Component{
    constructor(props)
    {
        super(props);
        this.ref = {
            titleRef: React.createRef(),
            yearsRef: React.createRef(),
            formatRef: React.createRef(),
            starsRef: React.createRef()
        }
    }
    render() {
        return(
            <Form className="row justify-content-center" inline>
                <Form.Label className="ml-sm-5 mt-4 col-sm-12 col-md-2"><h4>Добавления фильма:</h4></Form.Label>
                <FormControl
                    ref={this.ref.titleRef}
                    className="ml-5 mt-4 col-sm-4 col-md-2"
                    type="text"
                    placeholder="Title"
                    aria-label="Title"
                    aria-describedby="basic-addon2"
                />
                <FormControl
                    ref={this.ref.yearsRef}
                    className="ml-5 mt-4 col-sm-4 col-md-2"
                    type="text"
                    placeholder="Release Year"
                    aria-label="years"
                    aria-describedby="basic-addon2"
                />
                <Form.Control as="select" ref={this.ref.formatRef}
                              className="ml-5 mt-4 col-sm-4 col-md-2">
                    <option value="DVD">DVD</option>
                    <option value="VHS">VHS</option>
                    <option value="Blu-Ray">Blu-Ray</option>
                </Form.Control>
                <FormControl
                    ref={this.ref.starsRef}
                    className="ml-5 mt-4 col-sm-4 col-md-2"
                    type="text"
                    placeholder="Stars"
                    aria-label="stars"
                    aria-describedby="basic-addon2"
                />
                <Button className="ml-5 mt-4 col-sm-6 col-md-1" onClick={() => {this.props.onAdd(this.ref)}} variant="outline-info">
                    Добавить
                </Button>
            </Form>
        );
    }
};

export default(AddFilm);