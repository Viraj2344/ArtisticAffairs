import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';
import Products from '../../components/products/products';
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router-dom';

function ProductInfo2() {
  const { loading, setLoading } = useContext(myContext);
  const navigate = useNavigate();

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

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = () => {
    if (!product) {
      toast.error('Product information not available.');
      return;
    }

    const cartItem = {
      ...product,
    };
    dispatch(addToCart(cartItem));

    toast.success('Added to cart');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <section className="text-gray-800  body-font overflow-hidden bg-gray-100">
        <div className="container px-5 py-10 mx-auto">
          {loading && <p>Loading...</p>}
          {product && (
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-full object-cover object-center rounded"
                src={product.imageUrl}
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
                  {product.title}
                </h1>
                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                  {product.description}
                </p>

                <div className="flex flex-col">
                  <span className="title-font mb-5 font-medium text-2xl text-gray-900">
                    <s>₹{product.price}</s>
                    <p>₹{product.discountprice}</p>
                  </span>

                  <button
                    onClick={addCart}
                    className="mt-5 flex items-center justify-center text-black bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-orange-400 rounded-md transition-all duration-300 ease-in-out"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Products />
    </Layout>
  );
}

export default ProductInfo2;
