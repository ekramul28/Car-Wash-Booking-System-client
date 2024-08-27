import { services } from "@/assets/FackData/ServiceData";
import { TService } from "@/types/ServiceType";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Our Premium Car Wash Services
          </h2>

          <p className="mt-4 text-gray-300">
            Discover a range of high-quality car wash services designed to make
            your vehicle shine like new. From exterior washes to interior
            detailing, our expert team ensures a thorough clean, leaving your
            car spotless and gleaming.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service: TService, index: number) => (
            <Link
              key={index}
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              to="#"
            >
              <p>{service?.icon}</p>

              <h2 className="mt-4 text-xl font-bold text-white">
                {service?.title}
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                {service?.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
