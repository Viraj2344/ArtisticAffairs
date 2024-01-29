import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

// Sample product array
const customCasesProducts = [
  {
    id: 1,
    title: 'Wallet Card',
    price: 250.99,
    imageUrl: 'https://artisticaffairs.co.in/images/customcases/391610786_17978124047578311_121509455696016605_n.jpg',
    link: 'https://www.instagram.com/p/CyTE-KtIR5F/?img_index=1',
  },
  {
    id: 2,
    title: 'Temperature Bottles',
    price: 399.99,
    imageUrl: 'https://artisticaffairs.co.in/images/customcases/371878108_17972309339578311_3519510129698495544_n.jpg',
    link: 'https://www.instagram.com/p/Cwm7-Oso9J9/',
  },
  // Add more products as needed
];

function CustomCases() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

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

  return (
    <Layout>
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-8 md:py-16 mx-auto"
        style={{ fontFamily:'Salsa' }}>
          <div className=" w-auto mb-6 lg:mb-10">
            <h1 className=" text-center sm:text-2xl   lg:text-6xl font-bold title-font mb-2 text-gray-900"
            style={{ fontFamily:'Salsa' }}>
              CUSTOM CASES
            </h1>
            <h2 className=' text-center sm:text-lg   lg:text-xl font-bold title-font mb-2 text-gray-900'>For custom designs visit our instagram handle</h2>

          </div>

          <div className="flex flex-wrap -m-4">
            {customCasesProducts.map((item) => (
              <div
                key={item.id}
                className=" w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 "
                onClick={() => (window.location.href = item.link)}
              >
                <div className="h-full border-2 hover:shadow-lg transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 overflow-hidden">
                  <div className="flex justify-center cursor-pointer">
                    <img
                      className="w-full h-96 object-contain bg-white"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-medium mb-2 text-gray-900">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mb-2">₹{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CustomCases;


