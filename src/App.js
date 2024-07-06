import { useState } from "react";
// import "./App.css";
// import {toast} from "react-toastify";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    alert("Data Collected");
  }

  return (
   <div className="flex flex-col items-center mt-2 bg-blue-100">
   <form onSubmit={submitHandler}>

    <label htmlFor="firstName" className="font-bold">First name</label>
    <br/>
    <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Enter your FirstName"
      value={formData.firstName}
      onChange={changeHandler}
      className="outline mt-2 w-[95%] placeholder-gray-600 text-center px-1 py-1"
    />

    <br/>
    <label htmlFor="lastName"  className="font-bold">Last name</label>
    <br/>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Enter your LastName"
      value={formData.lastName}
      onChange={changeHandler}
      className="outline mt-2 w-[95%] placeholder-gray-600 text-center px-1 py-1"
    />

    <br/>
    <label htmlFor="email"  className="font-bold">Email Address</label>
    <br/>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Enter your Email Address"
      value={formData.email}
      onChange={changeHandler}
      className="outline mt-2 w-[95%] placeholder-gray-600 text-center px-1 py-1"
    />

    <br/>
    <label htmlFor="country"  className="font-bold">Country</label>
    <br/>
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="outline mt-2 w-[95%] placeholder-gray-600 text-center px-1 py-1"
      >

      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>

    <br/>
    <label htmlFor="streetAddress"  className="font-bold">Street Address</label>
    <br/>
    <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="Enter your Address"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="outline mt-2 w-[95%] placeholder-gray-600 text-center px-1 py-1"
    />

    <br/>
    <label htmlFor="city"  className="font-bold">City</label>
    <br/>
    <input
      type="text"
      name="city"
      id="city"
      placeholder="Enter your City"
      value={formData.city}
      onChange={changeHandler}
      className="outline mt-2 w-[95%] placeholder-gray-600 text-center px-1 py-1"
    />

  <br/>
    <label htmlFor="state"  className="font-bold">State / Province</label>
    <br/>
    <input
      type="text"
      name="state"
      id="state"
      placeholder="Enter your State"
      value={formData.state}
      onChange={changeHandler}
      className="outline mt-2 w-[95%] placeholder-gray-600 text-center px-1 py-1"
    />

    <br/>
    <label htmlFor="postalCode"  className="font-bold">Postal Code</label>
    <br/>
    <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="Enter your postal code"
      value={formData.postalCode}
      onChange={changeHandler}
      className="outline mt-2 w-[95%] placeholder-gray-600 text-center px-1 py-1"
    />

    <br/>
    <br/>
    <fieldset>
      <legend  className="font-bold">By Email</legend>

      <div className="flex gap-3 mb-4 mt-4">
      <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
      
      />
      <div className="">
        <label htmlFor="comments"  className="font-bold">Comments</label>
        <p  className="font-bold">Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>

      <div className="flex gap-3 mb-4">
      <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="candidates"  className="font-bold">Candidates</label>
        <p  className="font-bold">Get notified when a candidate applies for a job.</p>
      </div>
      </div>

      <div className="flex gap-3">
      <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="offers"  className="font-bold">Offers</label>
        <p  className="font-bold">Get notified when a candidate accepts or rejects an offer.

</p>
      </div>
      </div>
      


    </fieldset>

    <br/>
    <br/>
    <fieldset>
      <legend  className="font-bold">Push Notifications</legend>
      <p  className="font-bold">These are delivered via SMS to your mobile phone.</p>

      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
      />

      <label htmlFor="pushEverything"  className="font-bold ml-4">Everything</label>

      <br/>
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changeHandler}
      />

      <label htmlFor="pushEmail"  className="font-bold ml-4">Same as email</label>

      <br/>
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
      />

      <label htmlFor="pushNothing"  className="font-bold ml-4">No Push Notifications</label>

    </fieldset>



   <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-8 mt-5 mb-3 hover:text-red hover:bg-blue-800"
   >Save</button>






   </form>

   </div>
  );
}

export default App;
