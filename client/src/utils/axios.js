import axios from "axios";
 
export default axios.create({
 
    baseURL: "http://127.0.0.1:8080/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers":"*",
        'X-Requested-With': 'XMLHttpRequest',
    }
});