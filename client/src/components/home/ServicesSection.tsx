import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIcon, WalletIcon, SearchDollarIcon, HandHoldingUsdIcon } from "@/components/ui/icons";
import { ArrowRight, Check } from "lucide-react";

const services = [
  {
    id: "broking",
    title: "Broking Services",
    description: "Trade in equities, derivatives, and commodities with our advanced platforms and competitive brokerage rates.",
    icon: ChartBarIcon,
    features: [
      "Equity & Derivatives",
      "Commodities Trading",
      "Currency Futures"
    ]
  },
  {
    id: "wealth",
    title: "Wealth Management",
    description: "Personalized wealth management strategies to help you achieve your financial goals and secure your future.",
    icon: WalletIcon,
    features: [
      "Financial Planning",
      "Portfolio Management",
      "Retirement Planning"
    ]
  },
  {
    id: "research",
    title: "Equity Research",
    description: "In-depth analysis and research reports to help you make informed investment decisions.",
    icon: SearchDollarIcon,
    features: [
      "Stock Recommendations",
      "Market Analysis",
      "Sector Reports"
    ]
  },
  {
    id: "mutualfunds",
    title: "Mutual Funds",
    description: "Access a wide range of mutual funds with expert guidance on fund selection based on your goals.",
    icon: HandHoldingUsdIcon,
    features: [
      "SIP Investments",
      "Tax-saving ELSS",
      "Fund Performance Analysis"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Our Financial Services
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Comprehensive financial solutions tailored to your investment goals and risk appetite.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id}
              id={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="h-3 bg-primary"></div>
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <ul className="mb-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-2 h-4 w-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.id}`}>
                  <a className="text-secondary hover:text-secondary-dark font-medium inline-flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
