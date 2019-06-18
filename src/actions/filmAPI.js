const axios = require('axios');

class FilmAPI {
};
FilmAPI.getFilm = () => dispatch => {
    axios.get("http://localhost:3001/get").then(res => {
        console.log(res);
        dispatch({type: "GET", data: res});
    });
};
FilmAPI.addFilm = (data) => (dispatch) => {
    axios.post("http://localhost:3001/create", data).then(res => {
        dispatch({type: "ADD", data: res});
    });
};
FilmAPI.findFilm = (data) => (dispatch) => {
    axios.post("http://localhost:3001/find", data).then(res => {
        dispatch({type: "FIND", data: res});
    });
};
FilmAPI.sortFilm = () => (dispatch) => {
    axios.get("http://localhost:3001/sort").then(res => {
        dispatch({type: "SORT", data: res});
    });
};
FilmAPI.deleteFilm = (id) => (dispatch) => {
    axios.delete('http://localhost:3001/delete/' + id).then(res => {
        dispatch({type: "DELETE", id: id});
    });
};
FilmAPI.addWithFile = (file) => (dispatch) => {
    axios.post('http://localhost:3001/withFile',file).then(res => {
        dispatch({type: "ADD_FILE", data: res});
    });
};
export default FilmAPI;