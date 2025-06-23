import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
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

const SignUp = () => {
  const [showFirstLogo, setShowFirstLogo] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstLogo(prev => !prev);
    }, 3000); // switch every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.endsWith('@kiit.ac.in')) {
      newErrors.email = 'Please use your KIIT email address (@kiit.ac.in)';
    }
    
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      if (user.email && user.email.endsWith('@kiit.ac.in')) {
        setSuccessMessage(`Successfully signed up with KIIT email: ${user.email}`);
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        await auth.signOut();
        setErrors({
          email: 'Only KIIT email addresses (@kiit.ac.in) are allowed'
        });
      }
    } catch (error) {
      setErrors({
        general: error.message
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      
      const user = userCredential.user;
      setSuccessMessage(`Account created successfully for ${user.email}`);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false
      });
      
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      let errorMessage = 'Error creating account';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already registered';
        setErrors({ email: errorMessage });
      } else {
        setErrors({ general: error.message });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
      <div className="w-full max-w-6xl bg-[#0e0e0e] text-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Create Your Account</h2>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-900 text-green-100 rounded-md text-sm">
              {successMessage}
            </div>
          )}

          {/* General Error */}
          {errors.general && (
            <div className="mb-4 p-3 bg-red-900 text-red-100 rounded-md text-sm">
              {errors.general}
            </div>
          )}

          {/* Google Sign Up */}
          <button 
            onClick={handleGoogleSignUp}
            className="w-full border border-gray-400 rounded-md py-2 flex items-center justify-center gap-3 text-sm mb-4 hover:border-white transition"
          >
            <span className="text-lg font-bold">G</span>
            <span>Sign up with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600" />
            <span className="mx-4 text-sm text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-600" />
          </div>

          {/* Form Fields */}
          <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">
                E-mail <span className="text-xs text-gray-400">(Use KIIT Email ID)</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your KIIT Email ID"
                className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your Password"
                className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Checkbox */}
            <div className="flex items-center text-xs text-gray-400 mt-2">
              <input 
                type="checkbox" 
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2" 
              />
              <span>I accept all the terms and conditions</span>
              {errors.termsAccepted && <p className="text-red-500 text-xs ml-2">{errors.termsAccepted}</p>}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-4 py-2 rounded-md font-bold tracking-wide transition ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-200'}`}
            >
              {loading ? 'Processing...' : 'SIGN UP'}
            </button>
          </form>
        </div>

        {/* Right Side - Logo & Circle */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-10">
          <img
            src={showFirstLogo ? '/Signup logo(1).svg' : '/Signup logo(2).svg'}
            alt="E-Cell Logo"
            className="transition-opacity duration-6000 ease-in-out w-[300px] sm:w-[380px] md:w-[440px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;