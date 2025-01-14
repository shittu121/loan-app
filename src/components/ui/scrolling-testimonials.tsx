import Marquee from "./marquee";

interface Testimonial {
  name: string;
  image: string;
  description: string;
  buttonText?: string;
}

interface TestimonialProps {
  data: Testimonial[];
}

function TestimonialCard({
  testimonial: { image, name, description, buttonText },
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="flex h-44 w-96 overflow-hidden rounded-xl border bg-background dark:border-zinc-700">
      <div className="relative h-full w-32 flex-shrink-0 overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="px-4 py-2">
        <span className="block text-lg font-bold text-foreground">{name}</span>
        <span className="-mt-1 mb-1 block text-sm font-medium leading-loose text-muted-foreground">
          Founder of BAC
        </span>
        <span className="block text-sm text-foreground">{description}</span>
        {buttonText && (
          <button className="mt-2 rounded-md border px-3 py-1 text-sm text-primary border-primary hover:bg-primary hover:text-white">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default function ScrollingTestimonials({ data }: TestimonialProps) {
  return (
    <div className="w-full">
      <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
        {data.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Marquee>
    </div>
  );
}
