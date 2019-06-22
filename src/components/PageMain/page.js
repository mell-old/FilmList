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
            if(ref.titleRef.current.value === '' || ref.starsRef.current.value === '')
            {
                ref.titleRef.current.classList.add("placeholder");
                ref.starsRef.current.classList.add("placeholder");
                ref.titleRef.current.placeholder = "Заполните поле!";
                ref.starsRef.current.placeholder = "Заполните поле!";
            }
            else
            {
                const data = `Title=${ref.titleRef.current.value}&ReleaseYear=${ref.yearsRef.current.value}&Format=${ref.formatRef.current.value}&Stars=${ref.starsRef.current.value}`;
                ref.titleRef.current.value = '';
                ref.starsRef.current.value = '';
                ref.titleRef.current.classList.remove("placeholder");
                ref.starsRef.current.classList.remove("placeholder");
                ref.titleRef.current.placeholder = "Title";
                ref.starsRef.current.placeholder = "Stars";
                console.log(data);
                dispatch(api.addFilm(data));
            }
        }
    })
)(Page);