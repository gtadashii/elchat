async function login() {
  const options = {
    method: 'POST',
    url: 'https://heu8nknhya.execute-api.us-east-1.amazonaws.com/dev/login'
  };

  axios.request(options).then(function (response) {
    const data = JSON.stringify(response.data);
    alert(data);
  }).catch(function (error) {
    console.error(error);
  });
}

async function signup() {
  const options = {
    method: 'POST',
    url: 'https://heu8nknhya.execute-api.us-east-1.amazonaws.com/dev/usarios'
  };

  axios.request(options).then(function (response) {
    const data = JSON.stringify(response.data)
    alert(data);
  }).catch(function (error) {
    console.error(error);
  });
}