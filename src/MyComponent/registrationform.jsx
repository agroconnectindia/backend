import React from 'react'
import logo from './icon/logot.png'

function RegistrationForm() {
  return (
    <>
      <div className="flex w-screen pt-[350px] md:pt-0 items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-4xl md:h-[600px]">
          {/* Left Side - Logo */}
          <div className=" hidden md:flex flex-col md:rounded-l-2xl rounded-t-2xl items-center justify-center p-6 w-full md:w-1/3 bg-gray-100">
            <img
              src={logo}
              alt="Agro Connect Logo"
              className="w-60 h-60 object-contain"
            />
            <div className="absolute mt-56 ">
              <p className="font-bold">Agro-Connect India</p>
              <p className="font-normal text-xs ml-5">Farming Simplified</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 max-w-4xl min-h-full ">


          <div className='flex md:hidden items-center justify-center'>
          <img
              src={logo}
              alt="Agro Connect Logo"
              className="w-40 h-40 object-contain"
            />
            
          </div>

            <h2 className="text-xl font-semibold text-center mb-4">R E G I S T E R</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <label className="block">Name
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                    required
                    autoComplete="name"
                  />
                </label>
                
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">Email
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                    required
                  />
                </label>
                <label className="block">Phone No
                  <input
                    type="tel"
                    placeholder="Phone No"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                    required
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">City
                  <select
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm"
                    required
                  >
                    <option value="">Select City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                  </select>
                </label>
                <label className="block">State
                  <select
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Gujarat">Gujarat</option>
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">Language
                  <select
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm"
                  >
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </label>
                <label className="block">Soil Type
                  <select
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm"
                  >
                    <option value="">Select Soil Type</option>
                    <option value="Sandy">Sandy</option>
                    <option value="Clay">Clay</option>
                  </select>
                </label>
              </div>

              {/* <div className="flex flex-col md:flex-row items-center gap-4">
                <label className="flex items-center gap-2 w-full md:w-auto">
                  <input type="checkbox" className="w-4 h-4" /> Have Dairy?
                </label>
                <label className="flex items-center gap-2 w-full md:w-auto">
                  <input type="checkbox" className="w-4 h-4" /> Have Poultry?
                </label>
              </div> */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="block">Current Crop
                  <input
                    type="text"
                    placeholder="Current Crop"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                  />
                </label>
                <label className="block">Harvest Time
                  <input
                    type="text"
                    placeholder="Harvest Time"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                  />
                </label>
                <label className="block">Fertilizer Frequency
                  <input
                    type="text"
                    placeholder="Fertilizer Frequency"
                    className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                  />
                </label>
              </div>

            




              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="block">Urea Frequency
                <input
                  type="text"
                  placeholder="Urea Frequency"
                  className="bg-white border border-gray-300 p-2 rounded-lg w-full text-sm placeholder:text-xs"
                />
              </label>

              <div className="flex flex-col md:flex-row items-center gap-4 md:mt-6">
                <label className="flex items-center gap-2 w-full md:w-auto">
                  <input type="checkbox" className="w-4 h-4 " /> Have Dairy?
                </label>
                <label className="flex items-center gap-2 w-full md:w-auto">
                  <input type="checkbox" className="w-4 h-4" /> Have Poultry?
                </label>
              </div>
              </div>

              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 text-sm">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
