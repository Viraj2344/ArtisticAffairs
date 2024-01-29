import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import myContext from '../../context/data/myContext';

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;

  const textColors = {
    dark: 'text-white',
  };

  const bgColor = {
    light: '',
    dark: 'bg-gray-900',
  };

  const testimonials = [
    {
      name: 'Kamal Nayan Upadhyay',
      role: 'Senior Product Designer',
      content:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
        name: 'Kamal Nayan Upadhyay',
        role: 'Senior Product Designer',
        content:
          "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      },
      {
        name: 'Kamal Nayan Upadhyay',
        role: 'Senior Product Designer',
        content:
          "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      },
      {
        name: 'Kamal Nayan Upadhyay',
        role: 'Senior Product Designer',
        content:
          "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      },
    // Add more testimonial objects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className={` ${bgColor[mode]} `}>
        <div className="container mx-auto px-5 py-10  "
            style={{ fontFamily:'Salsa' }}>
          <h1 className={`text-center text-3xl font-bold text-white`}>Reviews</h1>
          <h2 className={`text-center text-2xl font-semibold mb-10 text-white`}>
            What our <span className="text-gray-300">customers</span> are saying
          </h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4 ">
                <div className={`h-full text-center bg-gray-400 p-4 rounded-xl border-pink-300 border-2`}>
                  <h2
                    className={`text-black font-medium title-font tracking-wider text-sm uppercase ${textColors[mode]}`}
                  >
                    {testimonial.name}
                  </h2>
                  <p className={`text-black ${textColors[mode]}`}>{testimonial.role}</p>
                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                  <p className={`leading-relaxed text-black `}>{testimonial.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
