import axios from 'axios';

const apiUrl =
  'https://emoji-api.com/emojis?access_key=259db79592c344eb2f7b37715c673d88cc5b5fb6';

export default function getApi() {
  return axios
    .get(apiUrl)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
}
