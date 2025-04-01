import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "Equity Investor, Mumbai",
    content: "DevMani Traders has transformed my investment approach. Their research-backed recommendations have consistently delivered excellent returns.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Business Owner, Delhi",
    content: "The wealth management team at DevMani Traders took time to understand my goals and created a personalized portfolio that aligns perfectly with my risk tolerance.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Verma",
    position: "IT Professional, Bangalore",
    content: "As a first-time investor, I was nervous about entering the market. The team at DevMani made the process simple and guided me through every step.",
    rating: 4.5
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-[#FFB81C] text-[#FFB81C]" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-[#FFB81C] text-[#FFB81C]" />);
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Client Testimonials</h2>
          <p className="max-w-3xl mx-auto text-neutral-200">
            Hear what our clients have to say about their experience with DevMani Traders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-white bg-opacity-10 p-6 rounded-lg border-0"
            >
              <CardContent className="p-0">
                <div className="flex items-center text-[#FFB81C] mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neutral-300 rounded-full mr-4 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-300">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
