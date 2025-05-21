import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Questionnaire() {
  const { register, handleSubmit, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    const formattedData = {
      floorType: data.woodType,
      size: data.jobSize,
      name: data.name,
      email: data.email,
      phone: data.phone,
      zipCode: data.zipCode,
      currentFloor: data.currentFloor,
    };
  
    try {
      const response = await axios.post("/api/submitForm", formattedData);
      console.log("Server Response:", response.data);
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error.response ? error.response.data : error);
    }
  };
  
  return (
    <section id="questionnaire" className="pt-6 pb-24 bg-white flex justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Get a Free Quote</h2>

        {submitted ? (
          <p className="text-center text-green-600 font-semibold text-lg">
            ✅ Thank you! We will contact you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* 1️⃣ Type of Wood */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                1️⃣ Type of Wood
              </label>
              <select {...register("woodType")} className="w-full p-3 border rounded-lg bg-gray-100 focus:ring focus:ring-yellow-300">
                <option>Hardwood</option>
                <option>Vinyl</option>
                <option>Laminate</option>
                <option>Resilient</option>
                <option>Bamboo</option>
                <option>Carpet</option>
              </select>
            </div>

            {/* 2️⃣ Current Floor and Demolition */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                2️⃣ Current Floor & Demolition
              </label>
              <select {...register("currentFloor")} className="w-full p-3 border rounded-lg bg-gray-100 focus:ring focus:ring-yellow-300">
                <option>It's clean, ready to install</option>
                <option>Demolition needed</option>
              </select>
            </div>

            {/* 3️⃣ Approximate Job Size */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                3️⃣ Approximate Job Size (sq ft or rooms)
              </label>
              <input
                {...register("jobSize")}
                type="text"
                placeholder="e.g. 1200 sq ft or 3 rooms"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:ring focus:ring-yellow-300"
                required
              />
            </div>

            {/* 4️⃣ User Contact Information */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                4️⃣ Your Name
              </label>
              <input {...register("name")} className="w-full p-3 border rounded-lg bg-gray-100 focus:ring focus:ring-yellow-300" required />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                📞 Phone Number
              </label>
              <input {...register("phone")} type="tel" className="w-full p-3 border rounded-lg bg-gray-100 focus:ring focus:ring-yellow-300" required />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                ✉️ Email (optional)
              </label>
              <input {...register("email")} type="email" className="w-full p-3 border rounded-lg bg-gray-100 focus:ring focus:ring-yellow-300" />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                📍 ZIP Code
              </label>
              <input {...register("zipCode")} type="text" className="w-full p-3 border rounded-lg bg-gray-100 focus:ring focus:ring-yellow-300" required />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:scale-105 active:scale-95 transition-transform">
                Submit Request 🚀
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
