import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';
import Products from '../../components/products/products';
import phoneData from './artisticaffairs.json';
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router-dom';
function ProductInfo() {
    const { loading, setLoading } = useContext(myContext);
    const navigate = useNavigate();
  
    const [product, setProduct] = useState(null);
    const [selectedPhoneModel, setSelectedPhoneModel] = useState('');
    const [selectedCaseType, setSelectedCaseType] = useState('');
    const params = useParams();
  
    const phoneModels = phoneData.map((phone) => phone['Phone Model']);
    const caseTypes = phoneData
    .find((phone) => phone['Phone Model'] === selectedPhoneModel)
    ? Object.values(phoneData.find((phone) => phone['Phone Model'] === selectedPhoneModel)).filter(
        (value, index) => index !== 0 // Skip the first value, which is the Phone Model
      )
    : [];
  
    const getProductData = async () => {
      setLoading(true);
      try {
        const productTemp = await getDoc(doc(fireDB, 'products', params.id));
        setProduct(productTemp?.data());
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
        if (!selectedPhoneModel) {
            toast.error('Please select a phone model first.');
            return;
          }
        
          if (!selectedCaseType) {
            toast.error('Please select a case type first.');
            return;
          }
        const cartItem = {
          ...product,
          selectedPhoneModel,
          selectedCaseType,
        };
        dispatch(addToCart(cartItem));
        
        toast.success('Added to cart');
      };
      
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
  
    const handleSelectPhoneModelChange = (event) => {
      setSelectedPhoneModel(event.target.value);
      setSelectedCaseType(''); // Reset selected case type when phone model changes
    };
  
    const handleSelectCaseTypeChange = (event) => {
      setSelectedCaseType(event.target.value);
    };
  
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

                <div className="flex flex-col ">
                  <span className="title-font mb-5 font-medium text-2xl text-gray-900">
                    <s>₹{product.price}</s>
                    <p>₹{product.discountprice}</p>
                  </span>
                  <div>
                    <h2>Select Phone Model:</h2>
                    <select
                      className="mr-auto w-full p-2 border border-gray-300 rounded-md"
                      value={selectedPhoneModel}
                      onChange={handleSelectPhoneModelChange}
                    >
                      <option value="">Select...</option>
                      {phoneModels.map((model, index) => (
                        <option key={index} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>
                  {selectedPhoneModel && (
                    <div>
                      <h2>Select Case Type:</h2>
                      <select
                        className="mr-auto w-full p-2 border border-gray-300 rounded-md"
                        value={selectedCaseType}
                        onChange={handleSelectCaseTypeChange}
                      >
                        <option value="">Select...</option>
                        {caseTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

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

export default ProductInfo;
