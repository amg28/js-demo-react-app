/* Creates XMLHttpRequest with a Promise. Response type will be in JSON format.
   Parameters: method for example "GET", url for example "https://example.org/order/1"  */
const sendHttpRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = 'json';

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    }

    xhr.onerror = () => {
      reject('Something went wrong...' + xhr.status);
    }

    xhr.send();
  });

  return promise;

}

export { sendHttpRequest as default };