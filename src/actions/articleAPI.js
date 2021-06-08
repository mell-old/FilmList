const axios = require('axios');

class ArticleAPI {
};
ArticleAPI.getArticle = () => dispatch => {
    axios.get("http://localhost:3001/get").then(res => {
        console.log(res);
        dispatch({type: "GET", data: res});
    });
};
ArticleAPI.addArticle = (data) => (dispatch) => {
    axios.post("http://localhost:3001/create", data).then(res => {
        dispatch({type: "ADD", data: res});
    });
};
ArticleAPI.findArticle = (data) => (dispatch) => {
    axios.post("http://localhost:3001/find", data).then(res => {
        dispatch({type: "FIND", data: res});
    });
};
ArticleAPI.sortArticle = () => (dispatch) => {
    axios.get("http://localhost:3001/sort").then(res => {
        dispatch({type: "SORT", data: res});
    });
};
ArticleAPI.deleteArticle = (id) => (dispatch) => {
    axios.delete('http://localhost:3001/delete/' + id).then(res => {
        dispatch({type: "DELETE", id: id});
    });
};
ArticleAPI.addWithFile = (file) => (dispatch) => {
    axios.post('http://localhost:3001/withFile',file).then(res => {
        dispatch({type: "ADD_FILE", data: res});
    });
};
export default ArticleAPI;