import React, { useState } from "react";

const images = [
  "/images/mm2.jpg",
  "/images/mm1.jpg",
  "/images/mm3.jpg",
  "/images/mm4.jpg",
  "/images/mm5.jpg",
  "/images/mm6.jpg",
  "/images/mm7.jpg",
  "/images/mm8.jpg",
  "/images/mm9.jpg",
];

const memberInfo = {
  shafi: {
    name: "Shafi Mohammad",
    title: "Chairman",
    bio: "Shafi Mohammad is the Chairman of the organization with a vision to empower education and healthcare in underserved communities.",
    image: "/rnd/shafi.jpg",
  },
  sandeep: {
    name: "Sandeep Singh",
    title: "Secretary | Retd. Maj. General",
    bio: "Sandeep Singh is a retired Major General and current Secretary, bringing strategic leadership and discipline to the mission.",
    image: "/rnd/sandeep1.jpg",
  },
};

const partnerInfo = {
  akfoundation: {
    name: "AK Foundation",
    title: "Partner Organization",
    bio: "AK Foundation collaborates with us to support education and skill-building programs in rural areas.",
    image: "/partners/akfoundation.jpg",
  },
  eduSpark: {
    name: "EduSpark Initiative",
    title: "Educational Partner",
    bio: "EduSpark provides learning resources and training tools for students and teachers.",
    image: "/partners/eduspark.jpg",
  },
};

const Gallery = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = () => setSelectedMember(null);

  return (
    <section className="py-20 pt-8 text-center" id="gallery">
      {/* Gallery Section */}
      <h2 className="inline-block px-1 py-1 text-orange-600 text-xl font-bold rounded-full mb-4">
        GALLERY
      </h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mb-16"> */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Members Section */}
      <h2 className="inline-block px-1 py-1 text-orange-500 text-xl font-bold rounded-full mb-4 mt-20">
        OUR MEMBERS
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {Object.entries(memberInfo).map(([key, member]) => (
          <div key={key} className="border rounded-xl shadow p-6 w-72 mx-auto">
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto rounded-full w-28 h-28 object-cover"
            />
            <h3 className="font-bold text-lg mt-4">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.title}</p>
            <button
              className="mt-4 border px-4 py-1 rounded hover:bg-gray-100"
              onClick={() => setSelectedMember(member)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Partners Section
      <h2 className="inline-block px-1 py-1 text-orange-500 text-xl font-bold rounded-full mb-4 mt-20">OUR PARTNERS</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
      {Object.entries(partnerInfo).map(([key, partner]) => (
      <div key={key} className="border rounded-xl shadow p-6 w-72 mx-auto">
      <img
        src={partner.image}
        alt={partner.name}
        className="mx-auto rounded-full w-28 h-28 object-cover"
      />
      <h3 className="font-bold text-lg mt-4">{partner.name}</h3>
      <p className="text-gray-500 text-sm">{partner.title}</p>
      <button
        className="mt-4 border px-4 py-1 rounded hover:bg-gray-100"
        onClick={() => setSelectedMember(partner)}
      >
        Read More
      </button>
    </div>
  ))}
</div> */}

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">
              {selectedMember.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{selectedMember.title}</p>
            <p className="text-gray-700 text-sm">{selectedMember.bio}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
