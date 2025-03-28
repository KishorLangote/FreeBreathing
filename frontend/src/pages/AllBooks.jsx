import React, { useState } from "react";
import BookCard from "../components/BookCard/BookCard";
import { useEffect } from "react";
import axios from "axios";
import { IoFilter } from "react-icons/io5";
import Pagination from "../components/Pagination/Pagination";

const AllBooks = () => {
  const [data, setData] = useState([]);
  const [filterGenre, setFilterGenre] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchedData = async (page = 1) => {
      const response = await axios.get(
        `https://kishor-langote-backend-free-breathing-library.vercel.app/api/v1/get-all-books`
      );
      console.log("Response:", response.data.books);
      setData(response.data.books);
    };
    fetchedData();
  }, []);

  const filteredGenre =
    filterGenre === "All"
      ? data
      : data?.filter((book) => book.genre === filterGenre);

  console.log(filteredGenre);

  const genreHandler = (e) => {
    setFilterGenre(e.target.value);
  };

  const SelectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(filteredGenre.length / 12) &&
      selectedPage !== page
    )
      setPage(selectedPage);

      //  scroll to the top of the page when chnaging pages using paginatio
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
  };

  return data ? (
    <div className="container py-3" style={{ minHeight: "80vh" }}>
      <div className="row mb-4 align-items-center">
      <div className="col-md-6 text-center text-md-start">
          <h1 className="fs-3">All Books</h1>
        </div>

        <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
          <div className="d-flex align-items-center">
            <label className="me-2 fs-5">
              <IoFilter /> Filter
            </label>
            <select
              className="form-select fs-5"
              value={filterGenre}
              onChange={genreHandler}
            >
              <option value="All">All</option>
              <option value="Educational">Educational</option>
              <option value="Business">Business</option>
              <option value="Philosophical">Philosophical</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Environment">Environment</option>
              <option value="Poetry">Poetry</option>
              <option value="History">History</option>
              <option value="Social">Social</option>
              <option value="Psychological">Psychological</option>
              <option value="Stories">Stories</option>
              <option value="Autobiography">Autobiography</option>
              <option value="Art & Culture">Art & Culture</option>
              <option value="Technology & Society">Technology & Society</option>
            </select>
          </div>
        </div>
      </div>

      {data.length === 0 && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-center mt-5">
            <div className="spinner-border text-primary"></div>
            <p className="fs-4 mt-3">Loading books...</p>
          </div>
        </div>
      )}
      <div className="text-center page-container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {data &&
            filteredGenre.slice((page - 1) * 12, page * 12).map((book) => (
              <div key={book._id} >
                {<BookCard data={book} />}
              </div>
            ))}
        </div>

       {/* pagination */}
       <Pagination
         currentPage={page} 
         totalPages={Math.ceil(filteredGenre.length / 12)}
         onPageChange={SelectPageHandler}
       />
      </div>
    </div>
  ) : (
    <p>data not fetch</p>
  );
};

export default AllBooks;
