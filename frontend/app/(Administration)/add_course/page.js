"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AddCourse = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-screen">
      <div className="ml-64 max-sm:ml-0  p-8">
        <div className="max-w-4xl mx-auto">
          {/* Modified logo section */}
          <div className="flex justify-center mb-8">
            <div className="w-32">
              {/* <Image
                src="/EduSmart.png"
                alt="EduSmart Education"
                width={120}
                height={40}
                className="object-contain"
              /> */}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-6">
              <label className="block mb-2 cursor-pointer w-40 h-40 mx-auto">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Course"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400">
                      <span className="text-3xl mb-2">+</span>
                      <span>Add IMG</span>
                    </div>
                  )}
                </div>
              </label>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Course Name"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />

              <textarea
                placeholder="Description"
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />

              <select className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors">
                <option value="">Select Teacher</option>
                {/* Add teacher options here */}
              </select>

              <input
                type="time"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />

              <input
                type="text"
                placeholder="Day"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />

              <input
                type="number"
                placeholder="Price for Student"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />

              <input
                type="number"
                placeholder="Price for Teacher 60%"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
