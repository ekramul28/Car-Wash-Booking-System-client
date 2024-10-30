const WhyChooseUs = () => {
  return (
    <section className="bg-image2 bg-fixed">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="w-full text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl text-center mb-6">
            Why Choose Us
          </h1>

          <div className="grid md:grid-cols-3 ">
            <div>
              <h1 className="mt-4 text-xl font-bold text-[#BE123C] sm:text-xl/relaxed">
                Expert Team
              </h1>
              <p className="mt-4  text-white font-bold roboto-light sm:text-xl/relaxed">
                Our skilled professionals use the latest techniques and
                high-quality products to ensure your car gets the best care
                possible
              </p>
            </div>
            <div>
              <h1 className="mt-4 text-xl font-bold text-[#BE123C] sm:text-xl/relaxed">
                Attention to Detail
              </h1>
              <p className="mt-4  text-white font-bold roboto-light sm:text-xl/relaxed">
                We go the extra mile to ensure every inch of your car is
                spotless, inside and out.We’re not happy until you are.
              </p>
            </div>
            <div>
              <h1 className="mt-4 text-xl font-bold text-[#BE123C] sm:text-xl/relaxed">
                Convenience
              </h1>
              <p className="mt-4  text-white font-bold roboto-light sm:text-xl/relaxed">
                With flexible service options and quick turnaround times, we
                make it easy to keep your car looking its best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
