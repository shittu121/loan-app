import ScrollingTestimonials from "./ui/scrolling-testimonials";

const testimonialsData = [
  {
    name: "John Doe",
    image: "/images/user1.jpg",
    description: "This platform helped me secure a loan within 24 hours!",
    buttonText: "Learn More",
  },
  {
    name: "Jane Smith",
    image: "/images/user2.jpg",
    description: "Amazing customer service and quick processing.",
    buttonText: "Read Story",
  },
  {
    name: "Michael Brown",
    image: "/images/user3.jpg",
    description: "Highly recommend for anyone in need of financial support.",
    buttonText: "See More",
  },
];

export default function Testimonial() {
  return (
    <div className='bg-[#151E28] flex justify-center p-32 items-center mt-28 px-4 overflow-x-hidden'>
        <div className="text-center">
            <h2 className="text-xl md:text-2xl text-white lg:text-4xl font-bold">
            Some of our Awesome Testimonials
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-[20rem] lg:max-w-2xl md:max-w-2xl mx-auto text-gray-200">
            Discover what our satisfied customers are saying! Hear firsthand how our services have made a positive impact on their lives and why they trust us for their financial needs.
            </p>
          <div className="mt-20">
            <ScrollingTestimonials data={testimonialsData} />
          </div>
        </div>
    </div>
  );
}
