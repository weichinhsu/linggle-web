import axios from 'axios'

const GBOOKS_API = 'https://www.googleapis.com/books/v1/volumes?'

export function search(payload) {
  return axios.get('/query/' + encodeURIComponent(payload))
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}

export function example(payload) {
  return axios.post('/example/', { ngram: payload })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}

export function google_example(payload) {
  return axios.get(GBOOKS_API + 'q="' + payload + '"&maxResults=40' )
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}