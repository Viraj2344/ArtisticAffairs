import React, { Fragment, useContext, useState, useRef, useEffect } from 'react';
import myContext from '../../context/data/myContext';
import { Link } from 'react-router-dom';
import { Transition, Dialog } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import './navbar.css'


function CollectionsDropdown({ collections, mode }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='group relative' ref={dropdownRef}>
      <button
        className=' block m-auto text-xl font-medium text-white cursor-pointer focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
        style={{ color: mode === 'dark' ? 'white' : '' }}
      >
       Collections ↓
      </button>


      <Transition
        show={isOpen}
        enter='transition ease-in-out duration-300 transform opacity-0'
        enterFrom='opacity-0 transform -translate-y-2'
        enterTo='opacity-100 transform translate-y-0'
        leave='transition ease-in-out duration-300 transform opacity-0'
        leaveFrom='opacity-100 transform translate-y-0'
        leaveTo='opacity-0 transform -translate-y-2'
      >
        <div className='collect absolute z-50 mt-3 w-60 bg-stone-300  text-black rounded-md shadow-lg overflow-hidden left-1/2 transform -translate-x-1/2'>
          <div className='py-3 px-4 space m-2 flex flex-col'>
            <Link
              to={collections[0].link}
              className='text-xl hover:text-white hover:bg-gradient-to-r from-gray-700 to-gray-900	rounded px-2 py-2 transition duration-300 block'
              onClick={closeDropdown}
              style={{ color: mode === 'dark' ? 'white' : '' }}
            >
              {collections[0].name}
            </Link>
            {collections.slice(1).map((collection) => (
              <Link
                key={collection.name}
                to={collection.link}
                className='text-xl hover:text-white hover:bg-gradient-to-r from-gray-700 to-gray-900		 rounded px-2 py-2 transition duration-300 block'
                onClick={closeDropdown}
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >
                {collection.name}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
}
function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login';
  };

  const cartItems = useSelector((state) => state.cart);

  const collections = [
    { name: 'All Collections', link: '/allproducts' },
    { name: 'Saree Cases', link: '/sareecases' },
    { name: 'Marvel Cases', link: '/marvelcases' },
    { name: 'Abstract Case', link: '/abstractcases' },
    { name: 'Travel Case', link: '/travelcases' },
    { name: 'Hippie Trippie Case', link: '/hippietrippiecases' },
    { name: 'Anime Cases', link: '/animecases' },
    { name: 'Cricket Cases', link: '/cricketcases' },
    { name: 'Football Cases', link: '/footballcases' },
    { name: 'Music Cases', link: '/musiccases' },
    { name: 'Cars/Bikes Case', link: '/carsbikescases' },
    { name: 'Gaming Cases', link: '/gamingcases' },
  ];

  return (
    <div className={`bg-gradient-to-r from-gray-700 to-gray-900	 p-4	 sticky top-0 z-50 ${mode === 'dark' ? 'dark-mode' : ''}`}>

      
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gradient-to-r from-gray-700 to-gray-900		 bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel
                className='relative flex w-full max-w-full flex-col overflow-y-auto bg-gradient-to-r from-gray-700 to-gray-900		 pb-12 shadow-xl'
                style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <div className='flex px-4 pb-2 pt-4'>
               
<button
  type='button'
  className={`rounded-md p-2 text-white-400 lg:hidden ${open ? 'open' : ''}`}
  onClick={() => setOpen(!open)}
  aria-label='Open menu'
  style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '' }}
>
  <span className='sr-only'>{open ? 'Close menu' : 'Open menu'}</span>
  <div className="hamburger-icon">
    <div className={`line ${open ? 'cross' : ''}`}></div>
    <div className={`line ${open ? 'hidden' : ''}`}></div>
    <div className={`line ${open ? 'cross' : ''}`}></div>
  </div>
</button>
                </div>
                <div className='ham  space-y-6 border-t  px-4 py-6'
                style={{fontFamily:'Lilita One'}}>
                <div>
                  <Link to={'/allproducts'} className=' font-medium text-white' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    All Products
                  </Link>
                </div>
                 
               <div className=''> <CollectionsDropdown collections={collections} mode={mode} /></div>  
                  {user ? (
                    <div className='flow-root'>
                      <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '' }} className='-m-2 block p-2 font-medium text-white'>
                        Order
                      </Link>
                    </div>
                    
                  ) : (
                    ''
                  )}
                  {user?.user?.email === 'virajbakshi083@gmail.com' ? (
                    <div className='flow-root'>
                      <Link to={'/dashboard'} className='-m-2 block p-2 font-medium text-white' style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Admin
                      </Link>
                    </div>
                  ) : (
                    ''
                  )}
                   <div>
                  <Link to={'/customcases'} className=' font-medium text-white' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Custom Cases
                  </Link>
                  </div>
                  {user ? (
                    <div className='flow-root'>
                      <a onClick={logout} className='-m-2 block p-2 font-medium text-white cursor-pointer' style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Logout
                      </a>
                    </div>
                    
                  ) : (
                    <div className='flow-root'>
                      <Link to={'/signup'} className='-m-2 block p-2 font-medium text-white cursor-pointer' style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Signup
                      </Link>
                    </div>
                    
                  )}
                      
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className={`relative ${mode === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-900		' : 'bg-gradient-to-r from-gray-700 to-gray-900		 text-white'} `}>
      <nav aria-label='Top' className={`px-4 sm:px-6 lg:px-8 ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
        <div className='flex h-16 items-center justify-between'>
        <button
              type='button'
              className={`rounded-md 		 p-2 text-white-400 lg:hidden ${open ? 'cross' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label='Open menu'
              style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '' }}
            >
              <span className='sr-only'>{open ? 'Close menu' : 'Open menu'}</span>
              <div className="hamburger-icon">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </button>

            <div className='flex items-center'>
              <Link to={'/'} className='flex'>
                <div className='flex'>
                  <h1 className='text-3xl text-white font-bold px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    Artistic Affairs
                  </h1>
                </div>
              </Link>
            </div>

            <div className='flex items-center  '>
              <div className='hidden  lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6'
              >
                <Link to={'/allproducts'} className=' font-medium text-xl flex items-center' style={{  color: mode === 'dark' ? 'white' : '' }}>
                  <span className='mx-2 text-white'>All Products</span>
                </Link>
                <CollectionsDropdown collections={collections} mode={mode} />
                <Link to={'/customcases'} className=' font-medium text-xl flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                  <span className='mx-2 text-white'>Custom Products</span>
                </Link>
       
                {user?.user?.email === 'virajbakshi083@gmail.com' ? (
                  <Link to={'/dashboard'} className=' font-medium text-xl flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span className='mx-2 text-white'>Admin</span>
                  </Link>
                ) : (
                  ''
                )}
                {user ? (
                  <a onClick={logout} className=' font-medium cursor-pointer text-xl flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span className='mx-2 text-white'>Logout</span>
                  </a>
                ) : (
                  <Link to={'/signup'} className=' font-medium cursor-pointer text-xl flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span className='mx-2 text-white'>Signup</span>
                  </Link>
                )}
              </div>

              <div className='ml-auto flow-root lg:ml-6'>
                <Link to={'/cart'} className='group flex items-center' style={{ color: mode === 'dark' ? 'white' : '' }}>
                  <svg xmlns='http://www.w3.org/200/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 text-white'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
                  </svg>
                  <span className='ml-2 text-sm font-medium group- text-white' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    {cartItems.length}
                  </span>
                  <span className='sr-only text-white'>items in cart, view bag</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
