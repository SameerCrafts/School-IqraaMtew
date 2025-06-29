import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate API or email service here (e.g., EmailJS, Formspree)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      email: "",
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex justify-center py-20 pt-8 px-4 bg-white" id="contact">
      <div className="w-full max-w-6xl bg-gradient-to-b from-blue-300 to-white rounded-xl p-8 md:flex">
        {/* Left Panel */}
        <div className="md:w-1/2 text-gray-800 space-y-4 mb-6 md:mb-0 md:pr-8 drop-shadow-sm">
          <h2 className="text-3xl font-bold text-blue">Contact us</h2>
          <p>
            Leave your email and we will try to get back to you within 24 hours
          </p>
          <p>
            📧 <strong>Email</strong>
            <br /> mtew1997@gmail.com
          </p>
          <p>
            📞 <strong>Phone</strong>
            <br /> +91-9999241786
          </p>
          <p>
            📍 <strong>Address</strong>
            <br /> V & P.O. Fatehpur Tagga, Faridabad, 121004, Haryana, India
          </p>
          <p>
            ⏰ <strong>Working hours</strong>
            <br /> 9 a.m. – 2 p.m.
          </p>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6">
          {submitted ? (
            <p className="text-green-600 font-semibold">
              Thanks! We'll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone No. *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="+91-0123456789"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Your message *
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="I want to contact you regarding ..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
