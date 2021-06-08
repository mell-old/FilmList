import React, { Component } from 'react'
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.ref = {
      titleRef: React.createRef(),
      yearsRef: React.createRef(),
      formatRef: React.createRef(),
      starsRef: React.createRef()
    }
  }
  optiontsInsert() {
    let options = [];
    for (let i = 1991; i <= 2021; i++) {
      options.push(<option value={i}>{i}</option>);
    }
    return options;
  }
  render() {
    return (
      <>
        <Form className="row p-4 justify-content-center" inline>
          <Row>
            <Col>
              <Form.Label className="mt-4 col-sm-12 col-md-2"><h4>Додавання статей:</h4></Form.Label>
            </Col>
            <Col>
              <FormControl
                ref={this.ref.titleRef}
                className="ml-5 mt-4 col-sm-4 col-md-2"
                type="text"
                placeholder="Назва"
                aria-label="Назва"
                aria-describedby="basic-addon2"
                required={"required"}
              />
              <Form.Control as="select" ref={this.ref.yearsRef}
                className="ml-5 mt-4 col-sm-4 col-md-2">
                {this.optiontsInsert()}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control as="select" ref={this.ref.formatRef}
                  className="ml-5 mt-4 col-sm-4 col-md-2">
                  <option value="DOCX">DOCX</option>
                  <option value="PDF">PDF</option>
                </Form.Control>
                <FormControl
                  ref={this.ref.starsRef}
                  className="ml-5 mt-4 col-sm-4 col-md-2"
                  type="text"
                  placeholder="Автори"
                  aria-label="stars"
                  aria-describedby="basic-addon2"
                  required={"required"}
                />
            </Col>
            <Col>
              <FormControl
                className="mt-4 mb-2"
                ref={this.ref.formRef}
                type="file"
                placeholder="Загрузить из файла"
                aria-label="Загрузить"
                aria-describedby="basic-addon2"
              />
              <Button className="mt-4 w-100" onClick={() => { this.props.onAdd(this.ref) }} variant="outline-info">
                Добавить
              </Button>
            </Col>
          </Row>

         

        </Form>
      </>
    );
  }
};

export default (AddArticle);