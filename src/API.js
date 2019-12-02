import axios from 'axios';

var API = axios.create({
	baseURL: (process.env.NODE_ENV === 'development') ? '' : process.env.REACT_APP_BASE_URL,
	responseType: "json"
	

});

// TODO: Send tokens with request interceptors

API.interceptors.response.use(response => {
	return response;
}, error => {
	if (error.response.status === 401) {
		console.log("Got 401");
	}
	return Promise.reject(error);
});

const isHandlerEnabled = (config={}) => {
	return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? 
	  false : true
  }


  API.get('https://accounts.csivit.com/oauth/authorize?clientId=294A404E635266556A586E327234753778214125442A472D4B6150645367566B&state=2jen9jfnvjn0nv1e&redirectUrl=http%3A%2F%2Flocalhost:3000%2Foauth%2Ftoken')
  .then(function (response) {
	console.log('response:'+response);
  })
  .catch(function (error) {
	console.log('eror:'+error);
  });


  //the default request handler does not add any header to the request
const requestHandler = (request) => {
	if (isHandlerEnabled(request)) {
	  // Modify request here
	 request.headers['Authorization'] = 'someToken';
	}
	return request;
  }


  API.interceptors.request.use(
	request => requestHandler(request)
  )


  const errorHandler = (error) => {
	if (isHandlerEnabled(error.config)) {
	  // Handle errors
	}
	return Promise.reject({ ...error })
  }
  
  const successHandler = (response) => {
	if (isHandlerEnabled(response.config)) {
	  // Handle responses
	}
	return response
  }


  API.interceptors.response.use(
	response => successHandler(response),
	error => errorHandler(error)
  )
//accounts.csivit.com/oauth/authorize?redirectUrl=http://localhost:3000&state=jvhiudubvuyqbd87b9b	

  API.interceptors.request.use(
	request => requestHandler(request)
  )


export default API;
