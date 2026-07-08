import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import BookCard from "../ui/BookCard";

const ListedWishList = () => {
  const { wishList } = useContext(BookContext);

  if(wishList.length === 0){
    return(
        <div className="h-[50vh] bg-gray-100 flex items-center justify-center rounded-4xl mt-10">
            <h2 className="text-3xl font-bold">No wish list data found</h2>
        </div>
    )
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishList.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
