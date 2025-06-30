// Components/Login.jsx
import { GoogleLogin } from '@react-oauth/google';
import { handleLoginSuccess } from '../store/auth_save';

const Login = ({ setUser }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-main-color border-2 text-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Login with Google</h2>
        <GoogleLogin
          onSuccess={(credentialResponse) =>
            handleLoginSuccess(credentialResponse, setUser)
          }
          onError={() => {
            alert('Login Failed');
          }}
        />
      </div>
    </div>
  );
};

export default Login;
