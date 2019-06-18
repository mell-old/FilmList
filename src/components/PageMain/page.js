import React, {Component} from "react";
import {Button} from "react-bootstrap";
import CardOfInfo from "./cardOfInfo";
import api from './../../actions/filmAPI.js'
import {connect} from "react-redux";
import AddFilm from "./AddFilm";

class Page extends Component
{
    componentDidMount() {
        this.props.onGet();
    }
    render(){
        const components = this.props.film;
        console.log(components);
        return(
            <div id="page">
                <div className="row justify-content-center">
                    <AddFilm onAdd={this.props.onAdd} className="col-12"/>
                </div>
                <div className="row justify-content-center">
                    {components}
                </div>
            </div>
        )
    }
};

export default connect(
    state => ({
        film: state.data
    }),
    dispatch => ({
        onGet: () => {
            dispatch(api.getFilm());
        },
        onAdd: (ref) => {
            const data = `Title=${ref.titleRef.current.value}&ReleaseYear=${ref.yearsRef.current.value}&Format=${ref.formatRef.current.value}&Stars=${ref.starsRef.current.value}`;
            ref.titleRef.current.value = '';
            ref.yearsRef.current.value = '';
            ref.starsRef.current.value = '';
            console.log(data);
            dispatch(api.addFilm(data));
        }
    })
)(Page);