import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIcon, WalletIcon, SearchDollarIcon, HandHoldingUsdIcon, ShieldIcon, TrendingUpIcon } from "@/components/ui/icons";
import { ArrowRight, Check, Building2, PiggyBank } from "lucide-react";

const services = [
  {
    id: "futures-options",
    title: "Futures and Options Trading",
    description: "Advanced derivative trading with comprehensive tools and strategies for sophisticated investors.",
    icon: ChartBarIcon,
    features: [
      "F&O Trading Platform",
      "Risk Management Tools",
      "Strategy Advisory"
    ]
  },
  {
    id: "ipos",
    title: "IPOs",
    description: "Get early access to Initial Public Offerings with expert guidance on new investment opportunities.",
    icon: TrendingUpIcon,
    features: [
      "IPO Applications",
      "Research & Analysis", 
      "Allocation Support"
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
  },
  {
    id: "fixed-deposit",
    title: "Fixed Deposit",
    description: "Secure your savings with competitive interest rates and flexible tenure options.",
    icon: PiggyBank,
    features: [
      "Competitive Rates",
      "Flexible Tenure",
      "Easy Online Process"
    ]
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Comprehensive insurance solutions to protect your family and financial future.",
    icon: ShieldIcon,
    features: [
      "Life Insurance",
      "Health Insurance",
      "Investment Plans"
    ]
  },
  {
    id: "bonds",
    title: "Bonds",
    description: "Invest in government and corporate bonds for steady income and portfolio diversification.",
    icon: Building2,
    features: [
      "Government Bonds",
      "Corporate Bonds",
      "Tax-free Bonds"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Our Financial Products
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Comprehensive financial products tailored to your investment goals and risk appetite.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
