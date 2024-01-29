import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Filter from '../../components/filter/Filter';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import ImageGrid from '../../components/imagegrid/Imagegrid';
import ReactSlider from 'react-slider';

function Tumblers() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const constantSecondCategory = "Tumblers"; // Set your constant category here

  const [selectedDiscountRange, setSelectedDiscountRange] = useState([0, 2000]); // Set your initial range

  const Filternew = (productList, secondCategory) => {
    return productList

      .filter((obj) => obj.secondCategory.toLowerCase() === secondCategory.toLowerCase())
      .filter((obj) => obj.discountprice >= selectedDiscountRange[0] && obj.discountprice <= selectedDiscountRange[1]);
  };

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDiscountRangeChange = (newRange) => {
    setSelectedDiscountRange(newRange);
  };

  return (
    <Layout>
      <section
        className={`text-gray-600 body-font ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
      >
        <div className="container px-5 py-8 md:py-16 mx-auto" style={{ fontFamily: 'Salsa' }}>
          <div className="w-auto mb-6 lg:mb-10">
            <h1
              className={`lg:text-6xl text-3xl text-center font-bold title-font mb-2  ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              style={{ fontFamily: 'Salsa' }}
            >
              TUMBLERS
            </h1>
          </div>
          <ImageGrid />

          {/* Discount Price Filter Slider */}
          <div className="flex flex-col items-left mb-4">
            <div className="flex">
              <label className="mr-2 mb-2 text-gray-700">Select Discount Range:</label>
              <span className="ml-2 rounded-lg  text-gray-700">
                {`₹${selectedDiscountRange[0]} - ₹${selectedDiscountRange[1]}`}
              </span>
            </div>
            <ReactSlider
              className="w-2/4 md:w-1/1 h-6 appearance-none  rounded-md"
              thumbClassName={`w-6 h-6 bg-blue-500 rounded-full focus:outline-none -mt-2`}
              trackClassName="h-1 bg-gray-300"
              value={selectedDiscountRange}
              min={0}
              max={2000}
              onChange={handleDiscountRangeChange}
            />
          </div>

          <div className="flex flex-wrap -m-4">
            {Filternew(product, constantSecondCategory).map((item, index) => {
              const { title, price, imageUrl, id, category, discountprice, secondCategory } = item;
              return (
                <div
                  key={index}
                  className={`w-half sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-1`}
                  onClick={() => (window.location.href = `/productInfo2/${id}`)}
                >
                  <div
                    className={`h-full border-2 shadow-lg transition-shadow duration-300 rounded-xl  ease-in-out border-black-500 border-opacity-60  overflow-hidden ${
                      mode === 'dark' ? 'dark-card' : ''
                    }`}
                  >
                    <div className="flex justify-center cursor-pointer">
                      <img
                        className="w-full h-56 sm:h-64 object-contain bg-white"
                        src={imageUrl}
                        alt="product"
                      />
                    </div>
                    <div className="p-4">
                      <h2
                        className={`text-lg font-medium mb-2 ${
                          mode === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {title}
                      </h2>
                      <div className="flex flex-row">
                        <s className={`text-gray-600 mb-2`}>₹{price}</s>
                        <p className={`text-gray-600 mb-2 ml-2`}>₹{discountprice}</p>
                      </div>
                      <p className={`text-gray-600 mb-2`}>{category}</p>
                      {/* Additional information or actions can be added here */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Tumblers;
