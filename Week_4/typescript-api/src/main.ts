import "./style.css";

// type RandomUser = {
//   name: string;
//   first: string;
//   last: string;
//   phone: number;
// };

// type Result = {
//   results: RandomUser[];
// };

// async function randomUser() {
//   const response = await fetch("https://randomuser.me/api?results=10");
//   const users = await response.json();
//   console.log(users);
// }

type RandomUser = {
  name: {
    first: string;
    last: string;
  };
  phone: string;
};

type Result = {
  results: RandomUser[];
};

async function fetchRandomUsers() {
  const response = await fetch("https://randomuser.me/api?results=99");
  const data: Result = await response.json();
  return data.results;
}

async function displayUsers() {
  const userList = document.getElementById("user-list");
  if (!userList) {
    console.error("Could not find user list element");
    return;
  }
  const users = await fetchRandomUsers();

  users.forEach((user, index) => {
    const userElement = document.createElement("div");
    userElement.innerHTML = `
      <p><strong>User ${index + 1}:</strong></p>
      <p>First Name: ${user.name.first}</p>
      <p>Last Name: ${user.name.last}</p>
      <p>Phone: ${user.phone}</p>
      <hr>
    `;
    userList.appendChild(userElement);
  });
}

displayUsers();
