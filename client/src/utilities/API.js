import axios from "axios";


// I tried to do an ajax call, it worked, but it was very confuing.  I ended up copying the json locally. 
export default {
  getImages: function() {
    return axios.get("https://pixabay.com/api/?key=14217002-d101f7169a9fd762b1872b464&q=vegetarian&image_type=photo");
  }
  
};
