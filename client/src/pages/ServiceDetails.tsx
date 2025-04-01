import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import { ChartBarIcon, WalletIcon, SearchDollarIcon, HandHoldingUsdIcon } from "@/components/ui/icons";
import { useEffect } from "react";

// Service details data
const servicesData = {
  broking: {
    title: "Broking Services",
    icon: ChartBarIcon,
    description: "Our comprehensive broking services provide you with access to equity, derivatives, commodities, and currency markets with competitive brokerage rates and advanced trading platforms.",
    features: [
      "Equity Trading: Access to BSE and NSE for seamless equity trading",
      "Derivatives Trading: Trade in futures and options across various segments",
      "Commodities Trading: Invest in MCX commodities with expert guidance",
      "Currency Trading: Participate in currency futures market",
      "Advanced Trading Platforms: Cutting-edge desktop and mobile platforms",
      "Research Support: Daily market updates and stock recommendations",
      "Portfolio Tracking: Real-time portfolio monitoring tools",
      "Margin Trading: Leverage your investments with margin facilities"
    ],
    benefits: [
      "Competitive brokerage rates",
      "Efficient order execution",
      "Robust risk management",
      "Dedicated relationship manager"
    ]
  },
  wealth: {
    title: "Wealth Management",
    icon: WalletIcon,
    description: "Our wealth management services are designed to help you grow and preserve your wealth through customized financial strategies tailored to your unique goals and risk appetite.",
    features: [
      "Comprehensive Financial Planning: Holistic approach to managing your finances",
      "Asset Allocation: Strategic distribution of investments across asset classes",
      "Portfolio Management: Professional management of your investment portfolio",
      "Retirement Planning: Secure your future with tailored retirement solutions",
      "Estate Planning: Comprehensive legacy planning services",
      "Tax Planning: Optimize your tax strategy for maximum efficiency",
      "Regular Portfolio Review: Periodic assessment and rebalancing",
      "Customized Investment Solutions: Strategies aligned with your goals"
    ],
    benefits: [
      "Personalized approach",
      "Goal-based strategies",
      "Regular performance reviews",
      "Wealth preservation solutions"
    ]
  },
  research: {
    title: "Equity Research",
    icon: SearchDollarIcon,
    description: "Our equity research team provides in-depth analysis and actionable recommendations to help you make informed investment decisions in the dynamic stock market.",
    features: [
      "Fundamental Research: In-depth analysis of company financials and business models",
      "Technical Analysis: Chart-based research for timing entry and exit points",
      "Stock Recommendations: Actionable buy, sell, and hold recommendations",
      "Sector Analysis: Comprehensive coverage of key industry sectors",
      "Thematic Research: Identifying investment themes and opportunities",
      "IPO Analysis: Detailed assessment of upcoming public offerings",
      "Quarterly Updates: Regular earnings and performance updates",
      "Market Outlook: Periodic market trends and outlook reports"
    ],
    benefits: [
      "Data-driven insights",
      "Timely investment calls",
      "Research-backed decisions",
      "Diverse coverage universe"
    ]
  },
  mutualfunds: {
    title: "Mutual Funds",
    icon: HandHoldingUsdIcon,
    description: "Our mutual fund services provide access to a wide range of funds across different categories with expert guidance on fund selection based on your financial goals.",
    features: [
      "Fund Selection: Expert assistance in choosing the right mutual funds",
      "SIP Investments: Systematic Investment Plans for disciplined investing",
      "Goal-based Investing: Funds aligned with your specific financial goals",
      "Tax-saving ELSS: Equity Linked Savings Schemes for tax benefits",
      "Fund Performance Analysis: Regular assessment of fund performance",
      "Portfolio Diversification: Creating balanced portfolios across fund categories",
      "Switching Facilities: Easy transition between funds when needed",
      "Regular Portfolio Reviews: Periodic evaluation of your mutual fund portfolio"
    ],
    benefits: [
      "Professional fund management",
      "Diversification benefits",
      "Liquidity and flexibility",
      "Potential for inflation-beating returns"
    ]
  }
};

// Default service details for fallback
const defaultService = {
  title: "Our Services",
  icon: ChartBarIcon,
  description: "DevMani Traders offers comprehensive financial services to help you achieve your investment goals.",
  features: [
    "Personalized financial solutions",
    "Expert guidance from seasoned professionals",
    "Advanced trading platforms",
    "Regular market updates and research"
  ],
  benefits: [
    "Tailored strategies",
    "Professional management",
    "Competitive rates",
    "Dedicated support"
  ]
};

const ServiceDetails = () => {
  const [, params] = useRoute<{ id: string }>("/services/:id");
  const serviceId = params?.id || "";
  const service = servicesData[serviceId as keyof typeof servicesData] || defaultService;
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  return (
    <main className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/#services">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>
          </Link>
          
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl">
            {service.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-white shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <service.icon className="text-3xl text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Key Features</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-green-500 mt-1 mr-3 h-5 w-5" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Why Choose Our {service.title}</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-500 mt-1 mr-3 h-5 w-5" />
                        <p>{benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-primary mb-4">How It Works</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Initial Consultation</h4>
                      <p className="text-neutral-600">
                        Schedule a meeting with our financial experts to discuss your goals and requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Strategy Development</h4>
                      <p className="text-neutral-600">
                        Our team creates a customized strategy aligned with your financial objectives.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Implementation</h4>
                      <p className="text-neutral-600">
                        We execute the strategy and set up the necessary accounts and services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Regular Reviews</h4>
                      <p className="text-neutral-600">
                        Periodic reviews and adjustments to ensure your strategy remains effective.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get Started</h3>
                <p className="mb-4 text-neutral-600">
                  Ready to leverage our {service.title.toLowerCase()}? Contact our team today to schedule a consultation.
                </p>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white" asChild>
                  <Link href="/#contact">Contact Us Now</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Partner Advantage</h3>
                <p className="mb-4 text-neutral-600">
                  As an authorized partner of Kotak Securities, we offer enhanced benefits and reliability.
                </p>
                <div className="flex items-center mt-4">
                  <img 
                    src="https://www.kotaksecurities.com/images/kotak-logo.svg" 
                    alt="Kotak Securities Logo" 
                    className="h-10 mr-4"
                  />
                  <span className="text-sm font-medium">Authorized Partner</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Related Services</h3>
                <ul className="space-y-3">
                  {Object.entries(servicesData)
                    .filter(([id]) => id !== serviceId)
                    .map(([id, serviceInfo]) => (
                      <li key={id}>
                        <Link href={`/services/${id}`}>
                          <a className="flex items-center py-2 px-4 hover:bg-neutral-100 rounded-md transition duration-200">
                            <serviceInfo.icon className="text-primary mr-3 h-5 w-5" />
                            <span>{serviceInfo.title}</span>
                          </a>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
                <p className="mb-4">
                  Our team is available to answer any questions you may have about our {service.title.toLowerCase()}.
                </p>
                <div className="flex items-center mt-4">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full" asChild>
                    <a href="tel:+911234567890">Call Us Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;
