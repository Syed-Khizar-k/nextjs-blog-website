import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <header className="bg-gray-800 text-white py-5 text-center">
                <h1 className="text-3xl">About Us</h1>
            </header>
            <main className="p-5">
                <section className="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h2 className="text-xl text-gray-800">Our Mission</h2>
                    <p className="text-gray-600">We strive to provide the best services to our customers.</p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h2 className="text-xl text-gray-800">Our Team</h2>
                    <p className="text-gray-600">Meet our dedicated team of professionals.</p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-5 mb-5">
                    <h2 className="text-xl text-gray-800">Contact Us</h2>
                    <p className="text-gray-600">Feel free to reach out to us for any inquiries.</p>
                    
                </section>
            </main>
            <footer className="bg-gray-800 text-white text-center py-3">
                <p>&copy; 2023 Your Company Name</p>
            </footer>
        </div>
    );
};

export default About;