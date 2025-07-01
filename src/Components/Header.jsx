import Logo from './Logo';
import { useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { handleLogout } from '../store/auth_save';
const Header = ({setTab , currentTab, Userdata}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  console.log(Userdata.picture);
  const data = [
    {
      id:'#dashboard',
      label: 'Dashboard',
      setTab: 'dashboard'
    },
    {
      id: '#campaign',
      label: 'Campaign',
      setTab: 'campaign'
    },
    {
      id: '#Call',
      label: 'Call',
      setTab: 'Call'
    },
    {
      id: '#history',
      label: 'History',
      setTab: 'history'
    }
  ]

  useEffect(() => {
  console.log("Userdata updated", Userdata);
}, [Userdata]);

  return (
    <header className="sticky  bg-bg-color px-4 sm:px-8 py-6 flex items-center justify-between border-b-[1px] border-opacity-50 border-white z-50">
      {/* Logo */}
      <a href= "#dashboard" onClick={()=> setTab('dashboard')}>
        <Logo />
      </a>
      

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-row space-x-6 lg:space-x-10 text-white font-semibold text-lg lg:text-2xl">
        {
          data.map((item) => (
            <a onClick={()=>{setTab(item.setTab)}} href={item.id} className={`hover:text-gray-400 ${currentTab==item.setTab ? 'text-gray-400': ''}`}>{item.label}</a>
          ))
        }
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu (mobile only) */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={28} className="text-white cursor-pointer" />
          ) : (
            <Menu size={28} className="text-white cursor-pointer" />
          )}
        </div>

        {/* Profile Picture (desktop only) */}
        <div className="hidden md:block h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 cursor-pointer">
          <img
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            src={Userdata?.picture}
            alt="profile pic"
            className="rounded-full border-white border-2 object-cover w-full h-full hover:opacity-50"
            referrerPolicy='no-referrer'
          />
        </div>
      {/* profile menu */}
           {
            profileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-main-color border-2 text-white rounded-lg shadow-lg p-4 w-48 md:block hidden">
              <p className="font-semibold">Hey! {Userdata?.name || "User Name"}</p>
              <button
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600"
                onClick={() => handleLogout()} // Replace with logout logic
              >
                <LogOut size={20} className="text-white" />
                <span>Logout</span>
              </button>
            </div>
            )
           }
      </div>

      {/* Mobile Navigation Menu */}
      {/* Mobile Navigation Menu */}
{menuOpen && (
  <nav className="absolute top-[100%] left-1/2 transform -translate-x-1/2 mt-2 bg-main-color border-2 border-white w-[90vw] rounded-2xl p-6 flex flex-col space-y-4 items-center md:hidden z-40 shadow-lg">
    {/* Hey, Name */}
    <p className="text-white font-semibold">Hey! <span className='text-green-400'>{Userdata?.name || "User Name"}</span></p>
    {/* Navigation Links */}
     {data.map((item) => (
      <a
        href={item.id}
        className="text-white hover:text-gray-400"
        onClick={() => setMenuOpen(false) || setTab(item.setTab)}
      >
        {item.label}
      </a>
    ))}

    {/* Profile Section */}
    <div className="flex flex-col items-center mt-4 space-y-2">

      
      {/* Logout Button */}
      <button
        className="mt-2 w-full bg-red-500 text-white py-2 px-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600"
        onClick={() => handleLogout()} // Replace with logout logic
      >
        <LogOut size={20} className="text-white" />
        <span>Logout</span>
      </button>
    </div>
  </nav>
)}
    </header>
  );
};

export default Header;
