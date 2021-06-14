import axios from 'axios'


export default axios.create({
    baseURL:"https://a-contact-management-app.herokuapp.com/contacts",
})