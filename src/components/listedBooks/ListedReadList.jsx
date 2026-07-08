import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCard from "../ui/BookCard";

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(readList);

  useEffect(() => {
    if (sortingType === "page") {
      setFilteredReadList(
        [...readList].sort((a, b) => a.totalPages - b.totalPages),
      );
    } else if (sortingType === "rating") {
      setFilteredReadList([...readList].sort((a, b) => a.rating - b.rating));
    } else {
      setFilteredReadList(readList);
    }
  }, [sortingType, readList]);

  if (readList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-4xl mt-10">
        <h2 className="text-3xl font-bold">No read list data found</h2>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReadList.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
