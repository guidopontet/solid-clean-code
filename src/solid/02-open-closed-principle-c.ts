import axios from 'axios';

// We create a new class that will be responsible for making HTTP requests. So, if we need
// to change the HTTP client, we can do it in one place. With open-closed principle, we
// don't need to change the TodoService, PostService and PhotosService classes.
// This is also a good example of ADAPTER PATTERN.
export class HttpClient {

  // Using axios to make HTTP requests.
  // async get(url: string) {
  //   const { data, status } = await axios.get(url);

  //   return { data, status };
  // }

  // Using fetch to make HTTP requests.
  async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    return { data, status: response.status };
  }
}
