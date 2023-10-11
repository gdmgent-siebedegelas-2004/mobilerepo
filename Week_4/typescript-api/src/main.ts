import "./style.css";

type RandomUser = {
  name: string;
  first: string;
  last: string;
  phone: number;
};

type Result = {
  results: RandomUser[];
};

async function randomUser() {
  const response = await fetch("https://randomuser.me/api?results=10");
  const users = await response.json();
  console.log(users);
}
