import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`/api/item/${id}`);
        setItem(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  const handleBuyNow = () => {
    // Example: Navigate to a checkout page or display a modal
    alert(`Item ${item.name} added to cart!`);
    // Alternatively, navigate to a checkout page:
    // navigate('/checkout');
  };

  const formatPrice = (price) => {
    if (price == null || isNaN(price)) return "$0.00";
    return `$${parseFloat(price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return item ? (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:text-white">
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            <strong>Description:</strong> {item.description}
          </p>
          <p className="text-lg mb-4">
            <strong>Category:</strong> {item.category}
          </p>
          <p className="text-lg font-semibold mb-4">
            <strong>Price:</strong> {formatPrice(item.price)}
          </p>
          <button
            onClick={handleBuyNow}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center">Item not found</div>
  );
}

export default ItemDetail;
