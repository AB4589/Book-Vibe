import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);

    //Regex
    const passwordRegExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleRegister = e => {
      
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(email)
        console.log(name)
        console.log(password) 
        setSuccessMessage(false)
        const auth = getAuth();
        if(passwordRegExpression.test(password) === false){
            setErrorMessage('Please enter a stronger password: 8–20 characters with uppercase and lowercase letters, a number, and a special character. ')
        }
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
                // Signed up 
                console.log(result)
                setSuccessMessage(true)
                // ...
              })
              .catch((error) => {
                setErrorMessage(error.message)
                // ..
              });
            }
    return (
        <div>
            <h1>SignUp page</h1>
              <form class="space-y-5" onSubmit={handleRegister}>
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="john@example.com"
          class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Create a strong password"
          class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div class="flex items-start gap-3">
        <input
          id="terms"
          type="checkbox"
          class="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label for="terms" class="text-sm text-gray-600">
          I agree to the
          <a href="#" class="text-indigo-600 hover:underline">Terms</a>
          and
          <a href="#" class="text-indigo-600 hover:underline">Privacy Policy</a>.
        </label>
      </div>
      <h2 className='text-red-600'>{errorMessage}</h2>
      {
        successMessage &&  <h2 className='text-green-600'>Succesfully Registered</h2>
      }
     
      <button
        type="submit"
        class="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        Sign Up
      </button>
    </form>

        </div>
    );
};

export default SignUp;