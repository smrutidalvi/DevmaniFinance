import { ShieldCheck, Clock, TrendingUp } from "lucide-react";

const PartnershipBanner = () => {
  return (
    <section className="bg-white py-4 border-b border-neutral-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-primary font-medium mr-2">Authorized Partner</span>
            <img 
              src="https://www.kotaksecurities.com/images/kotak-logo.svg" 
              alt="Kotak Securities Logo" 
              className="h-8"
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <ShieldCheck className="text-green-500 mr-2 h-5 w-5" />
              <span className="text-sm">Safe & Secure</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-primary mr-2 h-5 w-5" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="text-secondary mr-2 h-5 w-5" />
              <span className="text-sm">Market Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBanner;
