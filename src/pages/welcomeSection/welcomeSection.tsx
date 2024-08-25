const WelcomeSection = () => {
  return (
    <div className="flex justify-center items-center text-white">
      <section className="overflow-hidden bg-[#232323] sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold  md:text-3xl">
              Welcome to Kingston Car Spa
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              We are not like other 'car washes' we aim to provide a high level
              of service and strive to bring our clients only the best in car
              valeting expertise. We treat your car with the care it takes to
              keep it looking showroom standard. So if you are looking for a
              quality car wash in Glasgow, Kingston Car Spa in the place to come
              to pamper your vehicle.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-rose-400 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OeOYstTRlGA?si=v8qtubTcv-b4fWKR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
