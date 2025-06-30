// App.jsx
import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Cookies from 'js-cookie';

import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Call from './Components/Call';
import Login from './Components/Login';
import { handleLogout } from './store/auth_save';
import Campaign from './Components/Campaign';
import History from './Components/History';


const App = () => {
  const [Tab, setTab] = useState('dashboard');
  const [user, setUser] = useState(null); 
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID; 
  console.log("Google Client ID:", GOOGLE_CLIENT_ID);

  // Restore user from cookies on app load
  useEffect(() => {
    const savedUser = Cookies.get('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error('Failed to parse saved user', err);
        handleLogout(); // remove bad cookie
      }
    }
  }, []);

  const data = {
    name: `${user?.given_name || 'User'}`,
    email: `${user?.email || 'user@example.com'}`,
    picture: `${user?.picture || '/images/profile.png'}`,
    googleId: `${user?.sub || ''}`,
  };

  console.log('abc', data);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div>
          <Header setTab={setTab} currentTab={Tab} Userdata={data} />
          {Tab === 'dashboard' ? (
            <Dashboard setTab={setTab} googleId={data.googleId} />
          ) : Tab === 'Call' ? (
            <Call googleId={data.googleId}/>
          ) : Tab === 'campaign' ? (
            <Campaign />
          ) : Tab === 'history' ? (
            <History googleId={data.googleId}/>
          ):null
          }       
        </div>
      )}
    </GoogleOAuthProvider>
  );
};

export default App;
