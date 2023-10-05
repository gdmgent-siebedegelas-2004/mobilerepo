interface Book {
  title: string;
  author: string;
  alreadyRead: boolean;
}

const books: Record<string, Book> = {
  book1: {
    title: "The Alchemist",
    author: "Paulo Coelho",
    alreadyRead: true,
  },
  book2: {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    alreadyRead: false,
  },
  book3: {
    title: "1984",
    author: "George Orwell",
    alreadyRead: false,
  },
  book4: {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    alreadyRead: true,
  },
  book5: {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    alreadyRead: true,
  },
};

export default books;

// Outcome
console.log(`
=============================================================================
|                               READING LIST                                |
=============================================================================
`);

// Iteratie
for (const key in books) {
  if (books.hasOwnProperty(key)) {
    const book = books[key];
    if (book.alreadyRead) {
      console.log(`You already read "${book.title}" by ${book.author}`);
    } else {
      console.log(`You still need to read "${book.title}" by ${book.author}`);
    }
  }
}

//
console.log(`
=============================================================================
`);
