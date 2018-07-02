import axios from "axios";

function getConfigs(authorization) {
  var config = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  }

  if(authorization) {
    config.headers['Authorization'] = authorization;
  }

  return config;
}

export const get = function get(url, authorization) {
  const config = getConfigs(authorization);
  return axios({method: 'get', url: url, headers: config.headers});
};

export const post = function post(url, data, authorization) {
  const config = getConfigs(authorization);
  config.data = data;
  return axios.post(url, config);
};

export const patch = function patch(url, data, authorization) {
  const config = getConfigs(authorization);
  config.data = data;
  return axios.patch(url, config);
};

export const del = function del(url, authorization) {
  const config = getConfigs(authorization);
  return axios.delete(url, config);
};