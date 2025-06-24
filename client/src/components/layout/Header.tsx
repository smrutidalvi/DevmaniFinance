import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import devmaniLogo from "../../assets/devmani-logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleServicesSubmenu = () => {
    setServicesSubmenuOpen(!servicesSubmenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <div className="cursor-pointer">
                <img 
                  src={devmaniLogo} 
                  alt="DevMani Traders Pvt Ltd" 
                  className="h-12 w-auto" 
                />
              </div>
            </Link>
            <div className="hidden md:block text-xs bg-[#FFB81C] text-primary px-2 py-1 rounded-md">
              Authorized Partner of Kotak Securities
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <a className="text-primary hover:text-secondary font-medium">Home</a>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-primary hover:text-secondary font-medium flex items-center gap-1 focus:outline-none">
                Services <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <Link href="/services/futures-options">
                  <DropdownMenuItem className="cursor-pointer py-2">
                    Futures and Options Trading
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/ipos">
                  <DropdownMenuItem className="cursor-pointer py-2">
                    IPOs
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/mutualfunds">
                  <DropdownMenuItem className="cursor-pointer py-2">
                    Mutual Funds
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/fixed-deposit">
                  <DropdownMenuItem className="cursor-pointer py-2">
                    Fixed Deposit
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/insurance">
                  <DropdownMenuItem className="cursor-pointer py-2">
                    Insurance
                  </DropdownMenuItem>
                </Link>
                <Link href="/services/bonds">
                  <DropdownMenuItem className="cursor-pointer py-2">
                    Bonds
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/#about">
              <a className="text-primary hover:text-secondary font-medium">About Us</a>
            </Link>
            
            <a href="#contact" className="text-primary hover:text-secondary font-medium">Contact</a>
          </nav>
          
          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary-dark text-white" asChild>
              <Link href="/#contact">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-primary" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 space-y-1">
            <Link href="/">
              <a className="block py-2 px-4 font-medium hover:bg-neutral-200 rounded-md">Home</a>
            </Link>
            
            <div className="py-2 px-4">
              <button 
                className="flex items-center justify-between w-full font-medium"
                onClick={toggleServicesSubmenu}
              >
                Services
                <ChevronDown size={14} />
              </button>
              
              {servicesSubmenuOpen && (
                <div className="mt-2 pl-4">
                  <Link href="/services/futures-options">
                    <a className="block py-2 hover:bg-neutral-200 rounded-md">Futures and Options Trading</a>
                  </Link>
                  <Link href="/services/ipos">
                    <a className="block py-2 hover:bg-neutral-200 rounded-md">IPOs</a>
                  </Link>
                  <Link href="/services/mutualfunds">
                    <a className="block py-2 hover:bg-neutral-200 rounded-md">Mutual Funds</a>
                  </Link>
                  <Link href="/services/fixed-deposit">
                    <a className="block py-2 hover:bg-neutral-200 rounded-md">Fixed Deposit</a>
                  </Link>
                  <Link href="/services/insurance">
                    <a className="block py-2 hover:bg-neutral-200 rounded-md">Insurance</a>
                  </Link>
                  <Link href="/services/bonds">
                    <a className="block py-2 hover:bg-neutral-200 rounded-md">Bonds</a>
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/#about">
              <a className="block py-2 px-4 font-medium hover:bg-neutral-200 rounded-md">About Us</a>
            </Link>
            
            <a href="#contact" className="block py-2 px-4 font-medium hover:bg-neutral-200 rounded-md">Contact</a>
            
            <Link href="/#contact">
              <a className="block py-2 px-4 mt-2 bg-primary text-white text-center rounded-md">Get Started</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
