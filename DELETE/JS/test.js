const books = [
  {
    title: "Het Achterhuis",
    author: "Anne Frank",
    alreadyRead: true,
  },
  {
    title: "Harry Potter en de Steen der Wijzen",
    author: "J.K. Rowling",
    alreadyRead: false,
  },
  {
    title: "De Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    alreadyRead: false,
  },
];

console.log(`
=============================================================================
|                               READING LIST                                |
=============================================================================
`);

for (const index in books) {
  const book = books[index];
  if (book.alreadyRead === true) {
    console.log(`Al gelezen`);
  } else {
    console.log(`NOG niet gelezen`);
  }
}

console.log(`
=============================================================================
`);
