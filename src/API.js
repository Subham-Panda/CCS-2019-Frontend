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

const isHandlerEnabled = (config = {}) => {
	return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
		false : true
}

const requestHandler = (request) => {
	if (isHandlerEnabled(request)) {
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

API.interceptors.request.use(
	request => requestHandler(request)
)


export default API;
