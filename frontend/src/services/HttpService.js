import axios from "axios";

function getConfigs(authorization) {
  var config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    }
  };

  if(authorization) {
    const authString = `${authorization.token} ${authorization.email}`
    config.headers['Authorization'] = authString;
  }

  return config;
}

export const get = function get(url, authorization) {
  const config = getConfigs(authorization);
  return axios({method: 'get', url: url, headers: config.headers});
};

export const post = function post(url, data, authorization) {
  const config = getConfigs(authorization);
  return axios.post(url, data);
};

export const put = function put(url, data, authorization) {
  const config = getConfigs(authorization);
  config.data = data;
  return axios.put({
    method: 'put', 
    url: url, 
    headers: config.headers,
    body: config.data
  });
};

export const patch = function patch(url, data, authorization) {
  const config = getConfigs(authorization);
  config.data = data;
  return axios.patch({
    method: 'patch', 
    url: url, 
    headers: config.headers,
    body: config.data
  });
};

export const del = function del(url, authorization) {
  const config = getConfigs(authorization);
  return axios.delete({
    method: 'get', 
    url: url, 
    headers: config.headers
  });
};