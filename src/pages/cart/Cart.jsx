import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';
import { useLocation } from 'react-router-dom';


function Cart() {
  const context = useContext(myContext);
  const { mode } = context;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedPhoneModel = searchParams.get('phoneModel');
  const selectedCaseType = searchParams.get('caseType');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success('Delete cart');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.discountprice);
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const couponCodes = [
    { code: 'CODE1', discountPercentage: 10 },
    { code: 'CODE2', discountPercentage: 15 },
    // Add more coupon codes as needed
  ];

 
  const [couponCode, setCouponCode] = useState('');
  const [discountedTotal, setDiscountedTotal] = useState(totalAmount);

  const applyCoupon = () => {
    const upperCaseCouponCode = couponCode.toUpperCase();
    // Check if the entered coupon code is valid
    const validCoupon = couponCodes.find((coupon) => coupon.code === upperCaseCouponCode);

    if (validCoupon) {
      // Calculate the discount based on the valid coupon code
      const discountPercentage = validCoupon.discountPercentage;
      const discountAmount = (totalAmount * discountPercentage) / 100;
      const newDiscountedTotal = totalAmount - discountAmount;

      setDiscountedTotal(newDiscountedTotal);
      toast.success(`Coupon code '${couponCode}' applied successfully!`);
    } else {
      toast.error('Invalid coupon code. Please try again.');
    }
  };

  const grandTotal = couponCode ? discountedTotal : totalAmount;


  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleBuyNow = async () => {
    // Check if the user is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      // If not logged in, redirect to signup
      return navigate('/signup');
    }

    // Continue with the payment process specific to your application
    const options = {
      key: 'rzp_test_FpqyKexGASHX8t',
      key_secret: 'RbhH3gF4OUsNW6xgenwsyUf4',
      amount: parseInt(grandTotal * 100),
      currency: 'INR',
      order_receipt: 'order_rcptid_' + name,
      name: 'Artistic Affairs',
      description: 'for testing purpose',
      handler: function (response) {
        console.log(response);
        toast.success('Payment Successful');

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems,
          couponCode,
          addressInfo: {
            name,
            address,
            pincode,
            phoneNumber,
            date: new Date().toLocaleString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            }),
          },
          date: new Date().toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          }),
          email: user.user.email,
          userid: user.user.uid,
          paymentId,
        };

        try {
          const orderRef = collection(fireDB, 'order');
          addDoc(orderRef, orderInfo);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: '#3399cc',
      },
    };

    // Create a new instance of Razorpay with the provided options
    const pay = new window.Razorpay(options);

    // Open the Razorpay payment dialog
    pay.open();
  };

  return (
    <Layout showFooter={false}>
      <div className="h-screen bg-gray-100 pt-5 mb-[60%] md:pb-16" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
        <h1 className="mb-10 text-center text-4xl font-bold" style={{ fontFamily: 'Salsa' }}>Cart Items</h1>

        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg w-full mb-6 md:w-2/3 md:max-w-none">
            {cartItems.map((item, index) => {
              const { title, discountprice, description, imageUrl,selectedPhoneModel, selectedCaseType  } = item;
              return (
                <div
                  className="mb-6 rounded-lg border drop-shadow-xl bg-white p-6 sm:flex sm:justify-start"
                  style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}
                  key={index}
                >
                  <img src={imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                      <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{discountprice}</p>
                      {selectedPhoneModel && (
            <p>Phone Model: {selectedPhoneModel}</p>
          )}
          {selectedCaseType && (
            <p>Case Type: {selectedCaseType}</p>
          )}
                    </div>
                    <div onClick={() => deleteCart(item)} className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md w-full md:mt-0 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{totalAmount}</p>
            </div>

            <div className="mb-3 flex flex-col space-y-2 justify-between">
              <div>
                <label htmlFor="coupon" className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Coupon Code
                </label>
                <input
                  type="text"
                  id="coupon"
                  className="block w-full mt-1 px-2 py-1 border rounded-md"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
              </div>
              <button onClick={applyCoupon} className="px-4 py-2 text-white bg-blue-500 rounded-md">
                Apply Coupon
              </button>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{grandTotal}</p>
              </div>
            </div>

            <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}

              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={handleBuyNow}

            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
