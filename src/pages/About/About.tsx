const About = () => {
  return (
    <section className="about-section py-12 px-4 md:px-8 lg:px-16 bg-black text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-rose-600">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/beautiful-car-washing-service_23-2149212222.jpg"
              alt="Car Wash"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <p className="text-lg leading-relaxed">
              Welcome to our Car Washing Booking System! We are dedicated to
              providing top-notch car washing services with the convenience of
              online booking. Whether you need a quick wash or a detailed
              cleaning, our experienced team is here to make your car shine like
              new.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Our mission is to deliver high-quality car care solutions while
              saving you time and effort. With our easy-to-use booking platform,
              you can schedule a car wash at your convenience, and our team will
              take care of the rest. We use eco-friendly products and
              state-of-the-art equipment to ensure the best results for your
              vehicle.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Thank you for choosing our service. We look forward to serving you
              and helping your car look its best!
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-rose-600">
                Locations:
              </h2>
              <ul className="list-disc list-inside mt-2 text-lg">
                <li>Dhaka</li>
                <li>Jessore</li>
                <li>Chowjasha</li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-rose-600">
                Contact Us:
              </h2>
              <div className="flex items-center mt-4 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rose-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5h2a2 2 0 012 2v10a2 2 0 01-2 2H3m18-14h-2a2 2 0 00-2 2v10a2 2 0 002 2h2M16 7h.01M8 7h.01M12 11h.01M12 17h.01M8 17h.01M16 17h.01"
                  />
                </svg>
                <span>
                  Phone:{" "}
                  <a href="tel:+8801762477828" className="text-rose-600">
                    01762477828
                  </a>
                </span>
              </div>
              <div className="flex items-center mt-2 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rose-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12h2m-6 4h6m-6 4h6M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                <span>
                  Email:{" "}
                  <a
                    href="mailto:mdekramulhassan168@gmail.com"
                    className="text-rose-600"
                  >
                    mdekramulhassan168@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
