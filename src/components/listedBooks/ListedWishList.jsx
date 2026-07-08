import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCard from "../ui/BookCard";

const ListedWishList = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(wishList);

  useEffect(() => {
    if (sortingType === "page") {
      setFilteredReadList(
        [...wishList].sort((a, b) => a.totalPages - b.totalPages),
      );
    } else if (sortingType === "rating") {
      setFilteredReadList([...wishList].sort((a, b) => a.rating - b.rating));
    } else {
      setFilteredReadList(wishList);
    }
  }, [sortingType, wishList]);

  if (wishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-4xl mt-10">
        <h2 className="text-3xl font-bold">No wish list data found</h2>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReadList.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
