import React, { useState } from 'react';
import { FaGithub, FaGoogle, FaArrowRight, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCOtt4JAYpbTVS08G3tct_wuo9tdZFQAkk",
  authDomain: "e-cell-phase2.firebaseapp.com",
  projectId: "e-cell-phase2",
  storageBucket: "e-cell-phase2.firebasestorage.app",
  messagingSenderId: "840645676889",
  appId: "1:840645676889:web:10c38600fc9d3206150648"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

const LoginPopup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userEmail = user.email;
      
      if (userEmail.endsWith('@kiit.ac.in')) {
        setIsSuccess(true);
        setErrorMessage(`Successfully logged in with KIIT email: ${userEmail}`);
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      } else {
        await signOut(auth);
        setIsSuccess(false);
        setErrorMessage('Only KIIT email addresses (@kiit.ac.in) are allowed for login.');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    } catch (error) {
      setIsSuccess(false);
      setErrorMessage(`Error during Google login: ${error.message}`);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  const handleGithubLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      const userEmail = user.email || 'GitHub user';
      
      setIsSuccess(true);
      setErrorMessage(`Successfully logged in with GitHub: ${userEmail}`);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } catch (error) {
      setIsSuccess(false);
      setErrorMessage(`Error during GitHub login: ${error.message}`);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    
    if (!email.endsWith('@kiit.ac.in')) {
      setIsSuccess(false);
      setErrorMessage('Please use your KIIT email address (@kiit.ac.in) to login.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsSuccess(true);
      setErrorMessage(`Successfully logged in as: ${email}`);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } catch (error) {
      setIsSuccess(false);
      setErrorMessage(`Login error: ${error.message}`);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  // Check auth state on component mount
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setIsSuccess(true);
        if (user.email.endsWith('@kiit.ac.in')) {
          setErrorMessage(`Already logged in with KIIT email: ${user.email}`);
        } else {
          setErrorMessage(`Already logged in with: ${user.email}`);
        }
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e0e] p-4">
      <div className="bg-[#1a2b32] rounded-2xl shadow-lg p-8 md:p-10 max-w-md w-full text-white space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/Loginpopup logo.svg" alt="E-Cell Logo" className="h-14" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
        <p className="text-sm text-gray-300 text-center">
          Please enter your details to sign in
        </p>

        {/* Error/Success Message */}
        {errorMessage && (
          <div 
            className={`p-3 rounded-md text-sm ${isSuccess ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'}`}
          >
            {errorMessage}
          </div>
        )}

        {/* Email Input */}
        <input
          type="email"
          placeholder="E-mail (use KIIT e-mail ID)"
          className="w-full px-4 py-3 rounded-md bg-[#2b3e45] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <div className="flex items-center space-x-2 bg-[#2b3e45] rounded-md px-3 py-2">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent focus:outline-none text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            className="p-2 rounded-full border-2 transition"
            onClick={handleEmailPasswordLogin}
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>

        {/* Remember Me */}
        <div className="flex items-center space-x-2 text-sm">
          <input type="checkbox" className="accent-blue-500" />
          <label>Remember Me</label>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <hr className="w-full border-gray-500" />
          <span>OR</span>
          <hr className="w-full border-gray-500" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-6 text-white text-xl">
          <FaGoogle 
            className="cursor-pointer hover:text-blue-400" 
            onClick={handleGoogleLogin}
          />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaGithub 
            className="cursor-pointer hover:text-blue-400" 
            onClick={handleGithubLogin}
          />
        </div>

        {/* Bottom Text */}
        <p className="text-sm text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/Signup">
            <span className="text-white font-semibold cursor-pointer hover:underline">
              Create Account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;