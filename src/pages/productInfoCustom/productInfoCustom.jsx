

import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { fireDB } from '../../fireabase/FirebaseConfig';
import myContext from '../../context/data/myContext';

function ProductInfoCustom() {
  const { loading, setLoading } = useContext(myContext);
  const navigate = useNavigate();
  const customProductContent = {
    title: 'Custom Product',
    price: '400',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzC2jY6h4ctPjgpLbXkbWiKQxJQIYnOOrRw&usqp=CAU',
    id: 'custom_product_id',
    discountPrice: '349',
  };

  const [product, setProduct] = useState(null);
  const params = useParams();

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, 'products', params.id));
      if (productTemp.exists()) {
        setProduct(productTemp.data());
      } else {
        console.log('Product not found in Firestore.');
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const redirectToInstagram = () => {
    // Replace 'YOUR_INSTAGRAM_URL' with the actual Instagram profile URL
    window.location.href = 'https://www.instagram.com/__artistic_affairs/';
  };

  return (
    <Layout>
      <section className="text-gray-800  body-font overflow-hidden bg-gray-100">
        <div className="container px-5 py-10 mx-auto">
          {loading && <p>Loading...</p>}
          {customProductContent && (
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-full object-cover object-center rounded"
                src={customProductContent.imageUrl}
              />

              <div
                className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                style={{ fontFamily: 'Salsa' }}
              >
                <h2 className="text-sm title-font text-gray-600 tracking-widest">
                  ARTISTIC AFFAIRS
                </h2>
                <h1
                  className="text-gray-900 text-3xl title-font font-medium mb-1"
                  style={{ fontFamily: 'Salsa' }}
                >
                  {customProductContent.title}
                </h1>
                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                  {customProductContent.description}
                </p>

                <div className="flex flex-col">
                  <span className="title-font mb-5 font-medium text-2xl text-gray-900">
                    <s>₹{customProductContent.price}</s>
                    <p>₹{customProductContent.discountPrice}</p>
                  </span>

                  <button
                    onClick={redirectToInstagram}
                    className="mt-5 flex items-center justify-center text-black bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-orange-400 rounded-md transition-all duration-300 ease-in-out"
                  >
                   For ordering visit Instagram
                  </button>

                  <div className="mt-5 text-gray-700">
                    <h2>How to Customize:</h2>
                    <p>
                      Follow these steps to customize your product:
                      {/* Add custom design instructions here */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfoCustom;
