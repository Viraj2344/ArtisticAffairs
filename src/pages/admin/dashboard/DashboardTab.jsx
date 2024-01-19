import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';




function DashboardTab({}) {
  
  const context = useContext(myContext);
  const { mode, product, edithandle, deleteProduct, order, user } = context;
 
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const add = () => {
    window.location.href = '/addproduct';
  };

  return (
    <>
      <div className="container mx-auto " >
        <div className="tab container mx-auto ">
          <Tabs defaultIndex={0} className=" " >
            <TabList className="md:flex md:space-x-8 mb-6 grid grid-cols-3 text-center gap-4 md:justify-center  ">
              <Tab>
                <button type="button" className="tab-button text-white">
                  <div className="tab-icon">
                    <MdOutlineProductionQuantityLimits />
                  </div>
                  Products
                </button>
              </Tab>
              <Tab>
                <button type="button" className="tab-button text-white">
                  <div className="tab-icon">
                    <AiFillShopping />
                  </div>
                  Order
                </button>
              </Tab>
              <Tab>
                <button type="button" className="tab-button text-white">
                  <div className="tab-icon">
                    <FaUser />
                  </div>
                  Users
                </button>
              </Tab>
            </TabList>
            {/* product  */}
            <TabPanel>
              <div className="px-4 md:px-0 mb-16">
                <h1 className="text-center text-white mb-5 text-3xl font-semibold " style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Product Details
                </h1>
                <div className="flex justify-end">
                  <button
                    onClick={add}
                    type="button"
                    className="add-button"
                    style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                  >
                    <div className="flex gap-2 items-center text-white">
                      Add Product <FaCartPlus size={20} />
                    </div>
                  </button>
                </div>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm   text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Discount Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {product.map((item, index) => {
                      const { title, price, imageUrl, category, description, date ,discountprice} = item;
                      return (
                        <tbody key={index}>
                          <tr className="bg-gray-50 border-b dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                              {index + 1}.
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                              <img className="w-16" src={imageUrl} alt="img" />
                            </th>
                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                              {title}
                            </td>
                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                              ₹{price}
                            </td>
                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                              ₹{discountprice}
                            </td>
                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                              {category}
                            </td>
                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                              {date}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex gap-2">
                                <div className="flex gap-2 cursor-pointer text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                  <div onClick={() => deleteProduct(item)}>
                                    <AiFillDelete />
                                  </div>
                                  <Link to="/updateproduct">
                                    <div onClick={() => edithandle(item)}>
                                      <AiFillPlusCircle />
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="relative overflow-x-auto mb-16">
                <h1 className="text-center mb-5 text-3xl text-white font-semibold " style={{ color: mode === 'dark' ? 'white' : '' }}>
                  Order Details
                </h1>
                { order
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((allorder, index) => {
                  return (
                    <table key={index} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-black uppercase bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Payment Id
                          </th>
                                            <th scope="col" className="px-6 py-3">
                                                Image
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Title
                                            </th>
                                            
                                            <th scope="col" className="px-6 py-3">
                                                Price
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Category
                                            </th>
                                      
                                            <th scope="col" className="px-6 py-3">
                                             Coupon Code
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                             Phone Model
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                             Case Type
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            
                                            <th scope="col" className="px-6 py-3">
                                                Address
                                            </th>
                                            
                                            <th scope="col" className="px-6 py-3">
                                                Pincode
                                            </th>
                                            
                                            <th scope="col" className="px-6 py-3">
                                                Phone Number
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email
                                            </th>
                                             
                                            <th scope="col" className="px-6 py-3">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    {allorder.cartItems.map((item,index)=>{
                                        // console.log(allorder)
                                        const {title,category,imageUrl,price,discountprice,selectedPhoneModel,selectedCaseType} = item;
                                        return(
                                            <tbody>
                                        <tr  key={index} className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {allorder.paymentId}
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                <img className='w-16' src={imageUrl} alt="img" />
                                            </th>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {title}
                                            </td>
                                           
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                ₹{discountprice}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                               {category}
                                            </td>
                                  
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                               {allorder.couponCode}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                               {selectedPhoneModel}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                               {selectedCaseType}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {allorder.addressInfo.name}
                                            </td>
                                            
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {allorder.addressInfo.address}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                            {allorder.addressInfo.pincode}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                            {allorder.addressInfo.phoneNumber}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {allorder.email}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                               {allorder.date}
                                            </td>

                                        </tr>

                                    </tbody>
                                        )
                                    })}
                                </table>)
                                })}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {/* <User addressInfo={addressInfo} setAddressInfo={setAddressInfo} setLoading={setLoading} /> */}
                            <div className="relative overflow-x-auto mb-10">
                                <h1 className=' text-center mb-5 text-white text-3xl font-semibold ' style={{ color: mode === 'dark' ? 'white' : '' }}>User Details</h1>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-black uppercase bg-gray-200 " style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                S.No
                                            </th>

                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Uid
                                            </th>
                                           
                                        </tr>
                                    </thead>
                                   {user.map((item,index)=>{
                                    const {name,uid,email,date} = item;
                                    return(
                                        <tbody>
                                        <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                               {index + 1}.
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {name}
                                            </td>
                                          
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {email}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {uid}
                                            </td>

                                        </tr>
                                    </tbody>
                                    )
                                   })}
                                </table>
                            </div>
                        </TabPanel>

                    </Tabs>
                </div>
            </div>
        </>
    )
}


export default DashboardTab