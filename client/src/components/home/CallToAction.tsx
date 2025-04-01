import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="mb-6 text-neutral-600">
                Schedule a consultation with our financial experts to discuss your 
                investment goals and create a personalized strategy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-primary hover:bg-primary-dark text-white h-auto py-3"
                  asChild
                >
                  <Link href="#contact">
                    <CalendarCheck className="mr-2 h-5 w-5" /> 
                    Schedule Consultation
                  </Link>
                </Button>
                <Button 
                  className="border border-primary text-primary hover:bg-primary hover:text-white h-auto py-3"
                  variant="outline"
                  asChild
                >
                  <a href="tel:+911234567890">
                    <Phone className="mr-2 h-5 w-5" /> 
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-primary">
              <div 
                className="w-full h-full bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-75"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
