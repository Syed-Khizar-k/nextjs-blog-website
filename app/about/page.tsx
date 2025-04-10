import React from "react";

export const metadata = {
  title: "About - Blogifiers",
  description: "this is the About page",
};

const About: React.FC = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl font-bold  ">About Blogifiers</h1>
        <p className="mt-4 text-lg ">
          Welcome to our programming blog where we share insights, tutorials,
          and resources to help you advance your skills.
        </p>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center ">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="h-70  animate-pulse rounded-lg bg-[url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
              <h3 className="mt-4 text-xl font-semibold ">
                Project Title {index + 1}
              </h3>
              <p className="mt-2 ">
                Brief description of the project goes here.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
