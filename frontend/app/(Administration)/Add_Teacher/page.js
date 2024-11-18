"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

// const Sidebar = () => {
//   const menuItems = [
//     { icon: "👤", label: "Add Teacher", href: "/add_teacher" },
//     { icon: "📚", label: "Add Course", href: "/add_course" },
//     { icon: "👩‍🏫", label: "Teachers", href: "/teachers" },
//     { icon: "👨‍🎓", label: "Students", href: "/students" },
//     { icon: "📝", label: "Module", href: "/module" },
//     { icon: "📨", label: "Students requests", href: "/requests" },
//     { icon: "📊", label: "Student Report", href: "/report" },
//   ];

//   return (
//     <div className="bg-blue-600 text-white w-64 min-h-screen fixed left-0 top-0 lg:block hidden">
//       <div className="p-4">
//         <div className="flex items-center gap-2 mb-8">
//           <div className="text-3xl">👤</div>
//           <h1 className="text-2xl font-bold">Admin</h1>
//         </div>
//         <nav>
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               className="flex items-center gap-3 p-3 hover:bg-blue-700 rounded-lg transition-colors"
//             >
//               <span>{item.icon}</span>
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.age || formData.age < 0)
      newErrors.age = "Valid age is required";
    if (!formData.email || !formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Replace this with your actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          phoneNumber: "",
        });
        alert("Registration successful!");
      } catch (error) {
        console.error("Submission error:", error);
        alert("Error submitting form. Please try again.");
      }
    }
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <main className="flex-1 lg:ml-64 pb-10 lg:pt-8 ">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="relative w-[150px] h-[150px] mx-auto mb-4">
            <Image
              src="/EduSmart.png"
              alt="EduSmart Education"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 px-4">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-100 border ${
                errors.firstName ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:border-blue-500`}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm mt-1">
                {errors.firstName}
              </span>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-100 border ${
                errors.lastName ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:border-blue-500`}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm mt-1">
                {errors.lastName}
              </span>
            )}
          </div>

          <div className="relative">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-gray-100 border ${
                errors.age ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:border-blue-500`}
            />
            {errors.age && (
              <span className="text-red-500 text-sm mt-1">{errors.age}</span>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 pl-12 rounded-lg bg-gray-100 border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:border-blue-500`}
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Mail className="w-5 h-5 text-gray-400" />
            </span>
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full px-4 py-3 pl-12 rounded-lg bg-gray-100 border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:border-blue-500`}
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Phone className="w-5 h-5 text-gray-400" />
            </span>
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm mt-1">
                {errors.phoneNumber}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegistrationForm;
