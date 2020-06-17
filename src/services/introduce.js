import axios from 'axios'

const API = 'http://whisky.nlplab.cc:3000/'

export function get_about() {
  return axios.get(API + 'about')
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}
