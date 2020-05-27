import axios from 'axios'

const linggle_search = 'https://linggle.com/query/'

export function search(payload) {
  return axios.get('https://linggle.com/query/discuss%20about%20the')
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}
