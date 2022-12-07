import React from "react";

const About = () => {
  const information = [
    {
      title: "Shooting Stars",
      description:
        "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
    },
    {
      title: "The Catalyzer",
      description:
        "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
    },
    {
      title: "Neptune",
      description:
        "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
    },
    {
      title: "Melanchole",
      description:
        "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
    },
  ];

  return (
    <section className="container mx-auto">
      <section className="flex flex-col gap-y-8 py-4">
        <section className="text-gray-600 body-font bg-gray-100 rounded-2xl">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                ROOF PARTY POLAROID
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Master Cleanse Reliac Heirloom
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap">
              {information.map((info, index) => (
                <div
                  key={index}
                  className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
                >
                  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    {info.title}
                  </h2>
                  <p className="leading-relaxed text-base mb-4">
                    {info.description}
                  </p>
                  <span className="text-indigo-500 inline-flex items-center cursor-help">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              ))}
            </div>
            <a
              className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-fit"
              href="#contact-us"
            >
              Contact us
            </a>
          </div>
        </section>
        {/* mapped section */}
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300 rounded-2xl">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7294.426623291835!2d90.2137310264983!3d23.917499445600644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ef2e26644985%3A0x2d1f6903d1be0eb9!2sDhamrai!5e0!3m2!1sen!2sbd!4v1670429223416!5m2!1sen!2sbd"
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.4)",
                borderRadius: "16px",
              }}
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex" id="contact-us">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;
