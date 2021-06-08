import React, {Component} from "react";
import api from './../../actions/articleAPI.js'
import {connect} from "react-redux";
import AddArticle from "./AddArticle";

class Page extends Component
{
    componentDidMount() {
        this.props.onGet();
    }
    render(){
        const components = this.props.article;
        return(
            <div id="page">
                <div className="row justify-content-center">
                    <AddArticle onAdd={this.props.onAdd} className="col-12"/>
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
        article: state.data
    }),
    dispatch => ({
        onGet: () => {
            dispatch(api.getArticle());
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
                dispatch(api.addArticle(data));
            }
        }
    })
)(Page);