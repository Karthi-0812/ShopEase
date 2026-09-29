import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import useAPI from "../hooks/useAPI";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchFromUrl = searchParams.get("search") || "";
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [search, setSearch] = useState(searchFromUrl);

  const {
    data,
    loading,
    error,
  } = useAPI("https://dummyjson.com/products?limit=100");

  useEffect(() => {
    setSearch(searchFromUrl);
  }, [searchFromUrl]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>{error}</h2>
      </div>
    );
  }

  const products = data?.products || [];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchFromUrl.toLowerCase())
  );

  const productsPerPage = 8;

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  let currentPage = pageFromUrl;

  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * productsPerPage;

  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    setSearchParams({
      search: value,
      page: "1",
    });
  };

  const changePage = (page) => {
    setSearchParams({
      search: searchFromUrl,
      page: page.toString(),
    });

    window.scrollTo(0, 0);
  };

  return (
    <div className="page-container">
      <div className="page-heading">
        <span>OUR COLLECTION</span>
        <h1>All Products</h1>
        <p>
          Explore our collection of products.
        </p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      {displayedProducts.length === 0 ? (
        <div className="empty-message">
          <h2>No products found</h2>
          <p>Try searching for another product.</p>
        </div>
      ) : (
        <>
          <div className="product-grid">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => changePage(currentPage - 1)}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => changePage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}