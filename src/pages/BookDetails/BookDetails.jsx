// import { use } from "react";
import { useLoaderData, useParams } from "react-router";

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();

  //   const books = use(booksPromise);
  const books = useLoaderData();
  console.log(books);

  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId),
  );
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="card grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-25">
      <figure className="bg-gray-100 rounded-xl">
        <img src={image} alt={bookName} className="h-100 "/>
      </figure>
      <div className="card-body space-y-3 ">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">{author}</h2>
        <p className="py-2 border-y">{category}</p>
        <p>{review}</p>
        <div className="flex gap-5 items-center">
          <span className="font-bold text-lg">Tag</span>
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge text-green-500 bg-green-100 font-bold"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="border-t space-y-4">
          <div className="justify-between items-center gap-2">
            <span>Number of Pages: </span>
            <span>{totalPages}</span>
          </div>
          <div className="justify-between items-center gap-2">
            <span>Publisher: </span>
            <span>{publisher}</span>
          </div>
          <div className="justify-between items-center gap-2">
            <span>year of Publishing: </span>
            <span>{yearOfPublishing}</span>
          </div>
          <div className="justify-between items-center gap-2">
            <span>Rating: </span>
            <span>{rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn">Read</button>
            <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
