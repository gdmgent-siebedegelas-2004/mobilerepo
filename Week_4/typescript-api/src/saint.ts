import "./style.css";

type RandomUser = {
  name: {
    first: string;
    last: string;
  };
  phone: number;
  gender: string;
  picture: {
    thumbnail: string;
  };
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
    console.error("Can't load the data of this user!");
    return;
  }

  const users = await fetchRandomUsers();

  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    const userElement = document.createElement("div");
    userElement.innerHTML = `
    <p>User ${index + 1}:</p>
    <p>First Name: ${user.name.first}</p>
    <p>Last Name: ${user.name.last}</p>
    <p>Phone: ${user.phone}</p>
    <p>Gender: ${user.gender}</p>
    <img src="${user.picture.thumbnail}" alt="User Thumbnail"</img>
    <hr>
  `;
    userList.appendChild(userElement);
  }
}

displayUsers();
