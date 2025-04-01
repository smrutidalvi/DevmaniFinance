import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
        ></div>
      </div>
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Your Trusted Partner for Financial Growth
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-neutral-200">
            DevMani Traders provides expert financial services including broking, 
            wealth management, equity research, and mutual funds - partnered with Kotak Securities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-[#FFB81C] hover:bg-[#E09600] text-primary font-medium px-6 py-5 h-auto"
              asChild
            >
              <Link href="#contact">Start Investing</Link>
            </Button>
            <Button 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-5 h-auto"
              variant="outline"
              asChild
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-primary to-transparent"></div>
    </section>
  );
};

export default HeroSection;
