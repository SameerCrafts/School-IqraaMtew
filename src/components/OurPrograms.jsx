import React from "react";
import {
  GraduationCap,
  Building2,
  User2,
  Briefcase,
  Users,
  Heart,
} from "lucide-react";

const programs = [
  {
    icon: <GraduationCap className="text-orange-500 w-8 h-8" />,
    title: "Scholarships and Financial Assistance",
    description:
      "We understand that financial constraints should not hinder a student's access to education. We offer scholarships and financial assistance to deserving students, enabling them to pursue their dreams and aspirations.",
  },
  {
    icon: <Building2 className="text-orange-500 w-8 h-8" />,
    title: "Educational Infrastructure Development",
    description:
      "We are dedicated to improving educational infrastructure in underserved areas. We collaborate with schools and educational institutions to create conducive learning environments, ensuring that students have access to well-equipped classrooms, libraries, and laboratories.",
  },
  {
    icon: <User2 className="text-orange-500 w-8 h-8" />,
    title: "Teacher Training and Professional Development",
    description:
      "We believe that teachers play a pivotal role in shaping the future. We conduct training programs and workshops for educators, equipping them with modern teaching methodologies, innovative approaches, and continuous professional development opportunities.",
  },
  {
    icon: <Briefcase className="text-orange-500 w-8 h-8" />,
    title: "Skill Development Programs",
    description:
      "In today’s rapidly changing world, acquiring relevant skills is crucial for personal and professional growth. We offer skill development programs that empower individuals with practical skills, enhancing their employability and entrepreneurial abilities.",
  },
  {
    icon: <Users className="text-orange-500 w-8 h-8" />,
    title: "Community Outreach",
    description:
      "We actively engage with communities to promote the value of education. Through outreach initiatives, awareness campaigns, and community engagement events, we strive to create a culture of learning and participation in educational activities.",
  },
  {
    icon: <Heart className="text-orange-500 w-8 h-8" />,
    title: "Community Health",
    description:
      "We are committed to improving the health of underserved communities through targeted programs. We assess needs, collaborate locally, and implement sustainable interventions like workshops and vaccinations. Through ongoing partnerships and evaluation, we aim for lasting positive change.",
  },
];

const OurPrograms = () => {
  return (
    <section id="programs" className="py-20 pt-8 bg-white text-center">
      <h3 className="inline-block px-3 py-3 text-orange-600 text-xl font-bold rounded-full mb-4">
        Our Programs
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
        Designed to help those who need. <span className="text-black"></span>
      </h2>
      <p className="text-gray-600 mb-8 text-sm">
        For our mission to be fulfilled, we have started various programs to
        assist those who are in need.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow hover:shadow-lg hover:bg-orange-50 transition duration-300"
          >
            {program.icon}
            <h4 className="font-semibold text-lg mt-4 mb-2">{program.title}</h4>
            <p className="text-gray-600 text-sm">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;
