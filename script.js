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
  // const options = {
  //   method: 'DELETE'
  // }
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
    // console.log(res.status);
    // console.log(res);
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
      "https://jsonplaceholder.typicode.com/posts/5",
      options
    );
    const responseData = await response.json();
    console.log(responseData);
  } catch (err) {
    console.error(err.message);
  }
};

// 3. Metoda DELETE
// a) XMLHttpRequest
// b) Fetch API + then chain
// c) Fetch API + async/await

// Napisz 3 requesty z metodą delete przy pomocy 3 wypisanych wyżej rozwiązań, w rozwiązaniach z Fetch API pamiętaj o obiekcie options.

// 4. Metoda PUT
// a) XMLHttpRequest
// b) Fetch API + then chain
// c) Fetch API + async/await

// Napisz 3 requesty z metodą delete przy pomocy 3 wypisanych wyżej rozwiązań, w rozwiązaniach z Fetch API pamiętaj o obiekcie options.

// PUT
// Aktualizacja i nadpisywanie istniejących danych, jeżeli dane nie istnieją wcześniej, to je doda

// POST
// dodaje nowe dane i nie może nadpisywać

// 4. Metoda PATCH
// a) XMLHttpRequest
// b) Fetch API + then chain
// c) Fetch API + async/await

// Napisz 3 requesty z metodą delete przy pomocy 3 wypisanych wyżej rozwiązań, w rozwiązaniach z Fetch API pamiętaj o obiekcie options.

// PATCH
// bliźniacza do PUTa

// OBIEKT W BAZIE DANYCH
// {
//   {
//    id: 5,
//    name: 'abc',
//    age: 30
//   }
// }

// PUT {
//   id: 5,
//   name: 'abc',
//   age: 20
// }

// PATCH {
//   age: 20
// }

const fetchStocks = async () => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=MOF905T490J40QKZ`
  );
  const data = await response.json();
  const tables = Object.entries(data["Time Series (5min)"]);
  const dates = tables.map((el) => el[0]);
  const values = tables.map((el) => el[1]);
  const lowValues = values.map((el) => +el["3. low"]);
  const highValues = values.map((el) => +el["2. high"]);
  const min = Math.min(...lowValues);
  const max = Math.max(...highValues);
  const amplitude = max - min;
  console.log(`Amplitude: ${amplitude}`);
};

//fetchStocks();

// https://www.alphavantage.co
// /query?
// function=TIME_SERIES_INTRADAY
// &symbol=IBM
// &interval=5min
// &apikey=MOF905T490J40QKZ

// const person = {
//   name: "John",
//   job: "Truck driver",
//   age: 40,
// };

// console.log(person);
// // console.log(Object.entries(person));
// console.log(Object.keys(person));
// console.log(Object.values(person));

// const arr = [1, 2, 3, 4, 5];
// const arrTimes2 = arr.map((el, i, arr) => {
//   return el * 2;
// });
// console.log(arrTimes2);

const fetchFootballData = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Token": "1f020942fbbc4285b9af9c61c35c8ef5",
    },
  };

  const res = await fetch(
    "https://api.football-data.org/v2/competitions/CL/standings",
    options
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
};
//fetchFootballData();
// ZADANIE 1
// a) znajdź i wypisz nazwę rozgrywek
// b) znajdź i wypisz sezon jako

// 1. XMLHTTPREQEUST
// 2. FETCH API + THEN
// 3. FETCH API + ASYNC/AWAIT

// const fetchJSON = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/5")
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => console.log(data));
// };
// fetchJSON();
// then chain

async function AsyncGetHttpRequest() {
  const options = {
      method: "GET",
      headers: {
          "X-Auth-Token": "bcdb7c1e2298472c9d71425346d5cc70",}
      }
  
  const response = await fetch("http://api.football-data.org/v4/competitions/", options);
  const data = await response.json();
  console.log(data);
}
AsyncGetHttpRequest();