async function getItems(limit = 10) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    showOutput(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function addTodo(title, completed = false) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed,
    });
    showOutput(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function updateTodo(id, title, completed) {
  try {
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      title,
      completed,
    });
    showOutput(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function deleteTodo(id) {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    showOutput(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function makeSimultaneousRequests() {
  try {
    const [posts, todos] = await axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/todos'),
    ]);

    showOutput(posts.data);
    showOutput(todos.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

function createInterceptor() {
  const requestInterceptor = axios.interceptors.request.use(
    (config) => {
      console.log('Request Interceptor:', config);
      return config;
    },
    (error) => {
      console.error('Request Interceptor Error:', error);
      return Promise.reject(error);
    }
  );

  const responseInterceptor = axios.interceptors.response.use(
    (response) => {
      console.log('Response Interceptor:', response);
      return response;
    },
    (error) => {
      console.error('Response Interceptor Error:', error);
      return Promise.reject(error);
    }
  );

  return { requestInterceptor, responseInterceptor };
}

async function customGetRequest() {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
      params: { _limit: 5 },
      headers: { 'Content-Type': 'application/json' },
    });

    showOutput(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function handleErrors() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/nonexistent-endpoint');
    showOutput(response.data);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
    } else {
      console.error('Error:', error);
    }
  }
}

function cancelRequest(cancelToken) {
  axios.get('https://jsonplaceholder.typicode.com/posts', {
    cancelToken,
  });
}

function createCustomInstance() {
  const customAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'custom-header-value' },
  });

  customAxios.get('/comments')
    .then((response) => {
      showOutput(response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

async function handleErrorsWithValidation() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      validateStatus: (status) => status < 500,
    });
    showOutput(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

function globalizeAxios() {
  axios.defaults.headers.common['Authorization'] = 'Bearer your-auth-token';

  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      showOutput(response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

async function handleErrorInAxios() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    showOutput(response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
      console.error('Error Response Headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error Request:', error.request);
    } else {
      console.error('Error Message:', error.message);
    }
  }
}

function cancelAxiosRequest() {
  const cancelToken = axios.CancelToken.source();
  cancelRequest(cancelToken.token);
  cancelToken.cancel('Request canceled manually');
}

function createCustomInstance() {
  createCustomInstance();
}

function useGlobalAxios() {
  globalizeAxios();
}

function useErrorHandling() {
  handleErrorInAxios();
}

function useCancelRequest() {
  cancelAxiosRequest();
}

function useAxiosErrorHandling() {
  handleErrorInAxios();
}
