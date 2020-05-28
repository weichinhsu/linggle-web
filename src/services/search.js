import axios from 'axios'

// const linggle_search = 'https://linggle.com/query/'

export function search(payload) {
  console.log(1234)
  return axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}
