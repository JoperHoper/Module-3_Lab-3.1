//Module 3 Advanced Q10
//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from "node-fetch";
globalThis.fetch = fetch;
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

async function newfetchURLData(urls) {
  let promises = [];
  urls.forEach((url) => {
    promises.push(fetch(url));
  });
  Promise.all(promises).then((response) => {
    // console.log(response);
    for (var i in response) {
      if (response[i].status === 200) {
        response[i].json().then((data) => {console.log(data)});
      }
    }
  });
  //   const response = await fetch(url);
  //   console.log(response);
}
newfetchURLData([
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
]);
// newfetchURLData("udtesesoytfp");
