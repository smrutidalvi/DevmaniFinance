import { Link } from "wouter";
import { ArrowRight, Users, PieChart, Medal, UsersIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              About DevMani Traders
            </h2>
            <p className="mb-4 text-neutral-600">
              DevMani Traders Pvt Ltd is a premier financial services firm with expertise 
              in broking, wealth management, equity research, and mutual funds. As an authorized 
              partner of Kotak Securities, we combine industry knowledge with personalized 
              service to help our clients achieve their financial goals.
            </p>
            <p className="mb-6 text-neutral-600">
              With a team of experienced financial professionals and a client-centric approach, 
              we have established ourselves as a trusted partner for investors seeking reliable 
              guidance in the complex financial markets.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">5000+</h4>
                  <p className="text-sm text-neutral-500">Happy Clients</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <PieChart className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">₹500 Cr+</h4>
                  <p className="text-sm text-neutral-500">Assets Managed</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <Medal className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">10+ Years</h4>
                  <p className="text-sm text-neutral-500">Experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <UsersIcon className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">50+</h4>
                  <p className="text-sm text-neutral-500">Expert Advisors</p>
                </div>
              </div>
            </div>
            
            <Link href="#contact">
              <a className="text-secondary hover:text-secondary-dark font-medium inline-flex items-center">
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div 
              className="rounded-lg shadow-md h-48 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')" }}
            ></div>
            <div 
              className="rounded-lg shadow-md h-48 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')" }}
            ></div>
            <div 
              className="rounded-lg shadow-md h-48 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
            ></div>
            <div 
              className="rounded-lg shadow-md h-48 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
