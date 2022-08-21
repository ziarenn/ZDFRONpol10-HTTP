// BLOK HTTP

// 1. GET

// a) XMLHttpRequest
const XMLGetRequest = () => {
  const request = new XMLHttpRequest();
  console.log(request);

  // open (konfiguracja)
  request.open("GET", `https://jsonplaceholder.typicode.com/posts/1`);

  // send (wysyłanie requesta)
  request.send();

  // onload (oczekiwanie i reakcja na response)
  request.onload = function () {
    const obj = JSON.parse(request.response);
    console.log(obj);
    // JSON.parse() // JSON => JS obj
    // JSON.stringify() // JS obj => JSON
  };

  // error handling
  request.onerror = function () {
    console.error("Something went wrong!");
    // tu np logika odpowiadajaca za wyswietlanie wiadomosci o bledzie na stronie
  };
};
//XMLGetRequest();

// b) Fetch API + then chain
const FetchGetRequest = function () {
  // fetch domyslnie dziala na metodzie GET
  // fetch zwraca Promise
  fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((response) => {
      console.log(response);
      return response.json(); // .json() rozpakowuje surowe dane z response i zwraca Promise który zwraca gotowy obiekt (myślcie o tym tak, że zwraca to gotowy do użycia obiekt)
    })
    .then((data) => {
      console.log(data);
      // ...
    })
    .catch((err) => {
      console.error(err);
    }); // tu np logika odpowiadajaca za wyswietlanie wiadomosci o bledzie na stronie
};
// FetchGetRequest();

// c) Fetch API + async/await
const FetchGetRequestAsync = async function () {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    //   data.forEach((element) => {
    //     console.log(element);
    //   });
    // console.log(data[56]);
    // ...
  } catch (err) {
    console.error(err.message);
  }
};
//FetchGetRequestAsync();

// 2. Metoda POST

// a) XMLHttpRequest
const XMLPostRequest = () => {
  const request = new XMLHttpRequest();

  const body = JSON.stringify({
    title: "Fetching is awesome!",
    body: "Just a placeholder post.",
    userId: 15,
  });
  console.log(body);
  request.open("POST", "https://jsonplaceholder.typicode.com/posts");
  request.send(body);

  request.onreadystatechange = function () {
    console.log(request.response);
  };
};
//XMLPostRequest();

// b) Fetch API + then chain
const FetchPostRequest = () => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      title: "I prefer Axios over Fetch API.",
      body: "But Fetch API is also good!",
      userId: 20,
    }),
  };

  fetch("https://jsonplaceholder.typicode.com/posts", options).then((res) => {
    console.log(res.status);
    console.log(res);
  });
  // .then((res) => {
  //   return res.json();
  // })
  // .then((data) => console.log(data));
};
FetchPostRequest();

// c) Fetch API + async/await
const FetchPOSTAsync = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        title: "Async/await and POST requests.",
        body: "Async/await syntax can help you a lot making AJAX requests!",
        userId: 3,
      }),
    };
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        options
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.error(err.message);
    }
  };