import { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    // step 1: store book id or book object
    // step 2: where to store
    // step 3: array or collection
    // step 4: if the book is already exist then show a alert or toast
    // step 5: if not then add the book in the array or collection

    const isExistBook = storedBooks.find(
      (book) => book.bookId == currentBook.bookId,
    );

    if (isExistBook) {
      alert(`The book already exists!`);
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      alert(`${currentBook.bookName} is added to list!`);
    }

    console.log("Current Book: ", currentBook, storedBooks);
  };
  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
