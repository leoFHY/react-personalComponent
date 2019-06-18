import fetch from 'dva/fetch';

function parseJSON(response) {
  const data = response.json();
  return data;
}
const pathNameUrl = window.location.origin;

export function getPath() {
  return pathNameUrl;
}
function checkUrl(url, preName) {
  let hosts = window.location.origin;
  let env = 'test';
  let path = '';
  preName = preName ? '/' + preName : preName;
  switch (env) {
    case 'local':
      path = `${pathNameUrl}${preName}${url}`;
      break;
    case 'test':
      path = `${hosts}${preName}${url}`;
      break;
    case 'prod':
      path = `${hosts}${preName}${url}`;
      break;
    default:
      path = `${hosts}${preName}${url}`;
      break;
  }
  return path;
}

function checkStatus(response) {
  // console.log('response', response);
  if (response.redirected) {
    if (/login/.test(response.url)) {
      const str = 'brc-cas';
      location.href =
        window.location.origin +
        `/${str}/login?service=` + // brc-cas
        window.location.origin;
    }
  }
  // if (response.status >= 200 && response.status < 300) {
  return response;
  // }
  // const error = new Error(response.statusText);
  // error.response = response;
  // throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const aggerStr = '';
export default function request(url, options, preName = aggerStr) {
  preName = preName || aggerStr;
  console.log(url, options, preName);
  let path = checkUrl(url, preName);
  if (preName == 'pic'){
      path = url
  }
  
  // console.log("requestrequest",path);
  const token = window.localStorage.getItem('token');
  let opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: token || '',
    },
    credentials: 'same-origin',
  };
  if (options) {
    opt = { ...opt, ...options };
  }
  console.log(path, opt, token);
  return fetch(path, opt)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(err => ({ err }));
}
