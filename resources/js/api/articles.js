import axios from 'axios';
export default {
    all(){
        return axios.get('/api/articles');
    },
    find(id){
        return axios.get(`/api/articles/${id}`);
    },
    update(id,data) {
        return axios.get(`/api/articles/${id}`,data);
    },
};
