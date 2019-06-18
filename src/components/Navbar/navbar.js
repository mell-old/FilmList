import React, {Component} from 'react';
import {Navbar, Nav, Button, FormControl, Form, InputGroup} from "react-bootstrap";
import {connect} from "react-redux";
import api from "../../actions/filmAPI";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.ref = {
            formRef: React.createRef(),
            searchRef: React.createRef(),
            selectRef: React.createRef(),
        }

    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" style={{color:"#fff"}}>
                <Navbar.Brand href="#" onClick={this.props.onGet}>Список фильмов</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Button variant="outline-info" onClick={this.props.onSort}>Отсортировать по названию</Button>
                    </Nav>
                    <Form inline className="mr-5 ">
                        <InputGroup className="my-3">
                            <Form.Label className="mr-3">Поиск по:</Form.Label>
                            <Form.Control as="select" ref={this.ref.selectRef}>
                                <option value="Title">названию</option>
                                <option value="Stars">актеру</option>
                            </Form.Control>
                            <Form.Group controlId="selectSeach">
                                <FormControl
                                    ref={this.ref.searchRef}
                                    type="text"
                                    aria-label="Поиск"
                                    aria-describedby="basic-addon2"
                                />
                            </Form.Group>
                            <InputGroup.Append>
                                <Button onClick={() => {
                                    this.props.onFind(this.ref)
                                }} variant="outline-info">Поиск</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                    <Form inline enctype="multipart/form-data" method="POST" className="mt-md-3">
                        <InputGroup className="mb-3">
                            <Form.Group controlId="selectSeach">
                                <FormControl
                                    ref={this.ref.formRef}
                                    type="file"
                                    placeholder="Загрузить из файла"
                                    aria-label="Загрузить"
                                    aria-describedby="basic-addon2"
                                />
                            </Form.Group>
                            <InputGroup.Append>
                                <Button onClick={() => {
                                    this.props.onDownloadFile(this.ref.formRef)
                                }} variant="outline-info">Загрузить</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
            </Navbar>
        );
    }
}

export default connect(
    state => ({
        film: state.data
    }),
    dispatch => ({
        onGet: () => {
            dispatch(api.getFilm());
        },
        onSort: () => {
            dispatch(api.sortFilm());
        },
        onFind: (ref) => {
            let data = `${ref.selectRef.current.value}=${ref.searchRef.current.value}`;
            ref.searchRef.current.value = '';
            dispatch(api.findFilm(data));
        },
        onDownloadFile: (ref) => {
            const file = ref.current.files[0];
            dispatch(api.addWithFile(file));
        }
    })
)(NavBar);