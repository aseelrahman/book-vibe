import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWithList] = useState([]);

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
      toast.error(`The book already exists!`);
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to list!`);
    }

    console.log("Current Book: ", currentBook, storedBooks);
  };

  const handleWishList = (currentBook) => {
    // step 1: store book id or book object
    // step 2: where to store
    // step 3: array or collection
    // step 4: if the book is already exist then show a alert or toast
    // step 5: if not then add the book in the array or collection

    const isExistInReadList = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.error(`${currentBook.bookName} is already in read list!`);
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId == currentBook.bookId,
    );

    if (isExistBook) {
      toast.error(`The book already exists!`);
    } else {
      setWithList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to list!`);
    }

    console.log("Current Book: ", currentBook, storedBooks);
  };
  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishList,
    setWithList,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
