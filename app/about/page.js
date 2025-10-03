
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen text-white">
      <header className=" text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">About Creatvon</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Creatvon is a platform where fans can support their favorite creators directly by making donations. We believe in connecting creators with their communities in a seamless and secure way.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our mission is to empower creators to continue doing what they love while giving fans a simple and transparent way to show their support. With Creatvon, every contribution counts.
          </p>
        </section>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">For Fans</h2>
              <p className="text-lg mb-4">
                Fans can browse their favorite creators and donate directly to support their work. Every donation helps creators grow and continue producing amazing content.
              </p>
              <p className="text-lg">
                You can track your donations and see the impact you're making in real-time.
              </p>
            </div>
            <div>
              <img
                src="https://c4osl.org/wp-content/uploads/2025/02/Supporting-Fans-edited-1024x576.png"
                alt="Fans supporting creators"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/abunkmupzr3v6gnaxmtk.jpg"
                alt="Creator receiving support"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold mb-4">For Creators</h2>
              <p className="text-lg mb-4">
                Creators get a simple platform to receive donations from their fans without worrying about complex payment systems.
              </p>
              <p className="text-lg">
                You can focus on creating amazing content while your supporters contribute directly to your growth.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
          <p className="text-lg mb-6">
            Whether you're a fan or a creator, joining Creatvon is simple and free. Start building connections and supporting creativity today!
          </p>
          <a
            href="/login"
            className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Join Now
          </a>
        </section>
      </main>

   
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - Creativon",
}