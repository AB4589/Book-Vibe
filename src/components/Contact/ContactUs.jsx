import React from 'react';
import MyMap from '../../Map/Map';

const ContactUs = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-2 space-x-6'>
                <div className='space-y-5'>
                    <h1 className='font-extrabold text-4xl
'>Get In Touch</h1>
                    <p>Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.</p>
                    <h2 className='font-bold text-2xl'>Location</h2>
                    <p>North Khulshi, Road No-4, Chottogram, Bangladesh</p>
                    <h2 className='font-bold text-2xl'>Email</h2>
                    <p>contact@zentexx.com</p>
                    <h2 className='font-bold text-2xl'>Phone</h2>
                    <p>+8801330686418</p>
                </div>
                <div>
                     <div class="w-full max-w-3xl p-8">
    <form class="space-y-6">

      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="text-sm text-gray-400">Full Name</label>
          <input type="text" placeholder="Your Name"
            class="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-2" />
        </div>

        <div>
          <label class="text-sm text-gray-400">Email Address</label>
          <input type="email" placeholder="Email address"
            class="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-2" />
        </div>
      </div>


      <div>
        <label class="text-sm text-gray-400">Country</label>
        <input type="text" placeholder="Your Country"
          class="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-2" />
      </div>

     
      <div>
        <label class="text-sm text-gray-400">Phone*</label>
        <div class="flex items-center border-b border-gray-600 focus-within:border-blue-500">
          <div class="flex items-center gap-2 px-2">
            <span class="text-lg">🇺🇸</span>
            <span class="text-sm text-gray-300">+1</span>
          </div>
          <input type="tel" placeholder=""
            class="w-full bg-transparent outline-none py-2 px-2" />
        </div>
      </div>


      <div>
        <label class="text-sm text-gray-400">Subject</label>
        <select class="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-2 text-gray-300">
          <option class="bg-black text-gray-400">Select a Subject</option>
          <option class="bg-black">Support</option>
          <option class="bg-black">Sales</option>
          <option class="bg-black">General Inquiry</option>
        </select>
      </div>


      <div>
        <label class="text-sm text-gray-400">Message</label>
        <textarea rows="4" placeholder="Your message"
          class="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-2"></textarea>
      </div>

      <div>
        <button type="submit"
          class="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 hover:opacity-90 transition">
          Submit
        </button>
      </div>

    </form>
  </div>
                </div>
            </div>
            <h1 className='flex justify-center font-bold py-4 text-2xl'>Find Us On Google Map</h1>
            <MyMap></MyMap>
        </div>
    );
};

export default ContactUs;