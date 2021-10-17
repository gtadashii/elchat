async function login() {
  const options = {
    method: 'POST',
    url: 'https://heu8nknhya.execute-api.us-east-1.amazonaws.com/dev/login'
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}