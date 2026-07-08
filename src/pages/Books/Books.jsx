import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";

const Books = () => {
    const {storedBooks, wishList} =  useContext(BookContext)
      console.log(storedBooks, "bookContext");
    return (
        <div>
           Read List: {storedBooks.length} <br />
           Wish List: {wishList.length}
        </div>
    );
};

export default Books;