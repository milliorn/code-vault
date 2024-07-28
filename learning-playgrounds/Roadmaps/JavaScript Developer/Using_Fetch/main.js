async function getData() {
  try {
    const url = 'https://api.github.com/users';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error.message);
  }
}

// getData();

async function postData() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();
    console.log(json);

  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error.message);
  }
}

// postData();

async function fetchJSON() {
  try {
    const response = await fetch('https://api.github.com/users');

    const contentType = response.headers.get('content-type');

    if (!contentType | !contentType.includes('application/json')) {
      throw new TypeError("Oops, we haven't got JSON!");
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error.message);
  }
}

// fetchJSON();