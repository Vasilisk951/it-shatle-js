let usersA;
fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    usersA = data;
  });