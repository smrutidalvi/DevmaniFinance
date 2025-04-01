import { 
  ShieldIcon, UserTieIcon, LaptopIcon, TrendingUpIcon, HandshakeIcon, HeadsetIcon 
} from "@/components/ui/icons";

const features = [
  {
    title: "Trusted Partnership",
    description: "Authorized partner of Kotak Securities, ensuring reliability and security for all your financial needs.",
    icon: ShieldIcon
  },
  {
    title: "Expert Advisors",
    description: "Seasoned financial experts with deep market insights to guide your investment decisions.",
    icon: UserTieIcon
  },
  {
    title: "Advanced Technology",
    description: "Cutting-edge trading platforms and digital tools for seamless investing experience.",
    icon: LaptopIcon
  },
  {
    title: "Research-Driven",
    description: "Data-backed research and analysis to identify the best investment opportunities.",
    icon: TrendingUpIcon
  },
  {
    title: "Personalized Service",
    description: "Tailored financial solutions that align with your specific goals and risk profile.",
    icon: HandshakeIcon
  },
  {
    title: "Dedicated Support",
    description: "Responsive customer service team available to assist with all your queries.",
    icon: HeadsetIcon
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Why Choose DevMani Traders
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            We combine expertise, technology, and personalized service to deliver exceptional financial solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
