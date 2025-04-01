import { Link } from "wouter";
import { 
  FacebookIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-serif font-bold text-2xl mb-4">
              <span className="text-white">DevMani</span>
              <span className="text-[#FFB81C]">Traders</span>
            </div>
            <p className="mb-4 text-neutral-300">
              Authorized partner of Kotak Securities providing comprehensive financial services 
              to help you achieve your investment goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#FFB81C] transition duration-300">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#FFB81C] transition duration-300">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#FFB81C] transition duration-300">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="text-white hover:text-[#FFB81C] transition duration-300">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/broking">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Broking Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/wealth">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Wealth Management
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/research">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Equity Research
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/mutualfunds">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Mutual Funds
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/financial-planning">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Financial Planning
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/tax-planning">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Tax Planning
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Contact Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                    Terms & Conditions
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="mr-3 h-5 w-5 mt-1" />
                <span>DevMani Towers, 123 Financial District, Mumbai - 400001</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="mr-3 h-5 w-5 mt-1" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-start">
                <MailIcon className="mr-3 h-5 w-5 mt-1" />
                <span>info@devmanitraders.com</span>
              </li>
              <li className="flex items-start">
                <ClockIcon className="mr-3 h-5 w-5 mt-1" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-300 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DevMani Traders Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy">
                <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms">
                <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                  Terms of Service
                </a>
              </Link>
              <Link href="/disclaimer">
                <a className="text-neutral-300 hover:text-[#FFB81C] transition duration-300">
                  Disclaimer
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
