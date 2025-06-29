function AboutUs() {
  return (
    <section id="about" className="py-0 px-4 pt-8 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="text-xl font-bold text-orange-600   px-4 py-1 rounded-full uppercase">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-4">
          Welcome to Mewat Trust for Educational Welfare
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          We (Mewat Trust for Educational Welfare) are a non-governmental
          organization (NGO). The registration number of the organization is:
          23/1. It was established in the year 1997 and operates in Haryana,
          India.
          <br />
          <br />
          We (Mewat Trust for Educational Welfare) are a dedicated educational
          trust committed to transforming lives through quality education.
          Established with the vision of providing equal opportunities for all,
          we strive to empower individuals and communities through education,
          knowledge, and skills development.
        </p>

        {/* Underline accent */}
        <div className="w-6 h-1 bg-orange-500 mx-auto mt-6 rounded my-5"></div>
      </div>

      {/* IQRAA PUBLIC SCHOOL SECTION */}
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-md border-t border-b border-gray-300 flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <span className="inline-block px-4 py-1 text-orange-600 text-xl font-bold rounded-full mb-4">
            OUR EDUCATIONAL INITIATIVES
          </span>
          <h2 className="text-2xl font-extrabold text-blue-600 mb-4">
            IQRAA PUBLIC SCHOOL
          </h2>
          <p className="text-gray-600">
            Our dream and commitment to develop IQRAA PUBLIC SCHOOL started in
            the year 1997. It has seen many phases of development since then. We
            are now entering the phase of stability of achieving all round
            progress in IQRAA PUBLIC SCHOOL at large. Education is the key to
            create a society, which is dynamic and productive, offering
            opportunity and fairness to all. It is one of the most essential
            indications of human development, the importance of which cannot be
            undermined. It unlocks the treasure that lies within all of us. In
            the coming times, knowledge and skills will be the keys to success.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/rnd/iqraa-school.jpg"
            alt="IQRAA PUBLIC SCHOOL"
            className="rounded-lg shadow-lg max-h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
