// src/Form.js
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const Forms = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        gender: '',
        location: '',
        program: '',
        how_did_you_hear_about_us: '',
        referred_by: '',
        country: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (phoneNumber) => {
        setFormData({
          ...formData,
        //   phone_number: value, // Update the phone number field
          phone_number: phoneNumber, // Update the phone number field
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://techeraform-backend.onrender.com/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                setSuccessMessage('Registration successful!'); // Set success message
                setErrorMessage(''); // Clear any previous error messages
                // Clear the form
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    gender: '',
                    location: '',
                    program: '',
                    how_did_you_hear_about_us: '',
                    referred_by: ''
                });
            } else {
                setErrorMessage('Registration failed. Please try again.'); // Set error message
                setSuccessMessage(''); // Clear any previous success messages
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.'); // Handle fetch error
            setSuccessMessage(''); // Clear any previous success messages
        }
    };

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        // Fetch the country data from the API
        fetch('https://restcountries.com/v3.1/all')
          .then((response) => response.json())
          .then((data) => {
            const countryList = data.map((country) => ({
              name: country.name.common,
              code: country.cca2
            }));
            setCountries(countryList);
          })
          .catch((error) => console.error('Error fetching country data:', error));
      }, []);

    return (
        // <form onSubmit={handleSubmit}>
        //     <h1 className='text-3xl font-bold'>Enter Your Information</h1>
        //     {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        //     {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        //     <div className='flex gap-3 mt-4'>
        //         <div className='outline-orange-500'>
        //             <input
        //                 type="text"
        //                 name="first_name"
        //                 placeholder="First Name"
        //                 value={formData.first_name}
        //                 onChange={handleChange}
        //                 required
        //                 className='outline-orange-500 border border-gray-400 p-2 rounded-lg'
        //             />
        //         </div>

        //         <div>
        //             <input
        //                 type="text"
        //                 name="last_name"
        //                 placeholder="Last Name"
        //                 value={formData.last_name}
        //                 onChange={handleChange}
        //                 required
        //                 className='outline-orange-500 border border-gray-400 p-2 rounded-lg'
        //             />
        //         </div>
        //     </div>


        //     <div className='flex gap-3 mt-5'>
        //         <div>
        //             <input
        //                 type="email"
        //                 name="email"
        //                 placeholder="Email"
        //                 value={formData.email}
        //                 onChange={handleChange}
        //                 required
        //                 className='outline-orange-500 border border-gray-400 p-2 rounded-lg'
        //             />
        //         </div>

        //         <div>
        //             <input
        //                 type="text"
        //                 name="phone_number"
        //                 placeholder="Phone Number"
        //                 value={formData.phone_number}
        //                 onChange={handleChange}
        //                 required
        //                 className='outline-orange-500 border border-gray-400 p-2 rounded-lg'
        //             />
        //         </div>
        //     </div>


        //     <div className='flex gap-3 mt-5'>
        //         <div className='w-[50%]'>
        //             <select
        //                 name="gender"
        //                 value={formData.gender}
        //                 onChange={handleChange}
        //                 required
        //                 className='outline-orange-500 w-full border border-gray-400 p-2 rounded-lg'
        //             >
        //                 <option value="" className='bg-red-400'>Select Gender</option>
        //                 <option value="male">Male</option>
        //                 <option value="female">Female</option>
        //                 <option value="other">Other</option>
        //             </select>
        //         </div>

        //         <div>
        //             <input
        //                 type="text"
        //                 name="location"
        //                 placeholder="Location"
        //                 value={formData.location}
        //                 onChange={handleChange}
        //                 required
        //                 className='outline-orange-500 border border-gray-400 p-2 rounded-lg'
        //             />
        //         </div>
        //     </div>


        //     <div className='flex gap-3 mt-5'>
        //         <div className='w-[50%]'>
        //             {/* <input
        //                 type="text"
        //                 name="program"
        //                 placeholder="Program"
        //                 value={formData.program}
        //                 onChange={handleChange}
        //                 required
        //                 className='outline-orange-500 border border-gray-400 p-2 rounded-lg'
        //             /> */}
        //             <select
        //                 name="program"
        //                 value={formData.program}
        //                 onChange={handleChange}
        //                 required
        //                 className='outline-orange-500 w-full border border-gray-400 p-2 rounded-lg'
        //             >
        //                 <option value="" className='bg-red-400'>Select Program</option>
        //                 <option value="Devops">Devops</option>
        //                 <option value="Full Stack">Full Stack</option>
        //                 <option value="Data Analysis">Data Analysis</option>
        //                 <option value="other">Cloud Computing</option>
        //                 <option value="other">Cyber Security</option>
        //                 <option value="other">Cyber Security</option>
        //             </select>
        //         </div>

        //         <div className='w-[50%]'>
        //             {/* <input
        //                 type="text"
        //                 name="how_did_you_hear_about_us"
        //                 placeholder="How Did You Hear About Us?"
        //                 value={formData.how_did_you_hear_about_us}
        //                 onChange={handleChange}
        //                 required
        //                 className='outline-orange-500 border border-gray-400 p-2 rounded-lg'
        //             /> */}
        //             <select
        //                 name="how_did_you_hear_about_us"
        //                 value={formData.how_did_you_hear_about_us}
        //                 onChange={handleChange}
        //                 required
        //                 className='outline-orange-500 w-full border border-gray-400 p-2 rounded-lg'
        //             >
        //                 <option value="" className=''>How Did You Hear About Us?</option>
        //                 <option value="male">Facebook</option>
        //                 <option value="female">Instagram</option>
        //                 <option value="female">LinkedIn</option>
        //                 <option value="female">Twitter</option>
        //                 <option value="female">Online Search</option>
        //                 <option value="other">Other</option>
        //             </select>
        //         </div>
        //     </div>

        //     <div className='w-[100%] mt-5'>
        //         <input
        //             type="text"
        //             name="referred_by"
        //             placeholder="How Did You Hear About Us (Other)"
        //             value={formData.referred_by}
        //             onChange={handleChange}
        //             required
        //             className='outline-orange-500 border border-gray-400 p-2 rounded-lg w-full'
        //         />
        //     </div>
        //     <button type="submit" className='bg-green-500 py-2 rounded-lg mt-5 text-white px-10 w-[100%]'>Submit</button>
        // </form>
        <form onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold'>Enter Your Information</h1>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <div className='flex gap-3 mt-4'>
                <div className='w-full'>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        className='outline-orange-500 border border-gray-400 p-2 rounded-lg w-full'
                    />
                </div>

                <div className='w-full'>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        className='outline-orange-500 border border-gray-400 p-2 rounded-lg w-full'
                    />
                </div>
            </div>

            <div className='flex gap-3 mt-5'>
                <div className='w-full'>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='outline-orange-500 border border-gray-400 p-2 rounded-lg w-full'
                    />
                </div>

                <div className='w-full'>
                    {/* <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone Number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                        className='outline-orange-500 border border-gray-400 p-2 rounded-lg w-full'
                    /> */}
                    <PhoneInput
                        country={'ng'} // default country code
                        name = "phone_number"
                        value={formData.phone_number}
                        // onChange={handlePhoneChange}
                        onChange={(phoneNumber, countryData) => handlePhoneChange(phoneNumber)}
                        required
                        // placeholder="Phone Number"  // Add placeholder here
                        // className='outline-orange-500 border border-gray-400 p-2 rounded-lg w-full'
                        inputStyle={{
                            width: '100%',
                            outline: '2px solid orange',
                            border: '1px solid gray',
                            padding: '8px', // equivalent to p-2 in Tailwind
                            borderRadius: '8px', // equivalent to rounded-lg
                          }}
                          containerStyle={{
                            width: '100%',
                          }}
                          buttonStyle={{
                            borderTopLeftRadius: '8px',
                            borderBottomLeftRadius: '8px',
                            border: '1px solid gray',
                            // display: 'none', // This hides the flag dropdown
                          }}
                         specialLabel=""
                    />
                </div>
            </div>

            <div className='flex gap-3 mt-5'>
                <div className='w-full'>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className='outline-orange-500 w-full border border-gray-400 p-2 rounded-lg'
                    >
                        <option value="" className='disabled hidden'>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className='w-full'>
                    {/* <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className='outline-orange-500 border border-gray-400 p-2 rounded-lg w-full'
                    /> */}
                     <select 
                        name="location" 
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className='outline-orange-500 w-full border border-gray-400 p-2 rounded-lg'
                        >
                        <option value="" className='disabled hidden'>Select Country</option>
                        {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                            {country.name}
                        </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='flex gap-3 mt-5'>
                <div className='w-full'>
                    <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className='outline-orange-500 w-full border border-gray-400 p-2 rounded-lg'
                    >
                        <option value="" className='disabled hidden'>Select Program</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Full Stack">Full Stack</option>
                        <option value="Data Analysis">Data Analysis</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="Cyber Security">Cyber Security</option>
                    </select>
                </div>

                <div className='w-full'>
                    <select
                        name="how_did_you_hear_about_us"
                        value={formData.how_did_you_hear_about_us}
                        onChange={handleChange}
                        required
                        className='outline-orange-500 w-full border border-gray-400 p-2 rounded-lg'
                    >
                        <option value="" className='disabled hidden'>How Did You Hear About Us?</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Online Search">Online Search</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className='w-full mt-5'>
                <input
                    type="text"
                    name="referred_by"
                    placeholder="How Did You Hear About Us (Other)"
                    value={formData.referred_by}
                    onChange={handleChange}
                    className='outline-orange-500 border border-gray-400 p-2 rounded-lg w-full'
                />
            </div>

            <button type="submit" className='bg-green-500 py-2 rounded-lg mt-5 text-white px-10 w-full'>Submit</button>
        </form>

    );
};

export default Forms;
