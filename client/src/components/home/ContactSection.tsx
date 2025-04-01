import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to be contacted"
  })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  // Define form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      consent: false
    }
  });

  // Mutation for form submission
  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/messages", data);
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Message Sent!",
        description: data.message || "We will get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  // Form submission handler
  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-neutral-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Have questions about our services? Reach out to our team for personalized assistance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Office Address</h4>
                  <p className="text-neutral-600">
                    DEVMANI TRADERS PRIVATE LIMITED<br />
                    109/110, Horniman Circle Chamber, 1ST Floor,<br />
                    S.A.Brelvi Road, Fort, Mumbai – 400 001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                  <PhoneCall className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone Number</h4>
                  <p className="text-neutral-600">022 42134213</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p className="text-neutral-600">Devmanitraders08@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                  <Clock className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-neutral-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-neutral-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#"
                    className="bg-primary text-white hover:bg-primary-dark rounded-full w-10 h-10 flex items-center justify-center transition duration-300"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="#"
                    className="bg-primary text-white hover:bg-primary-dark rounded-full w-10 h-10 flex items-center justify-center transition duration-300"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href="#"
                    className="bg-primary text-white hover:bg-primary-dark rounded-full w-10 h-10 flex items-center justify-center transition duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="#"
                    className="bg-primary text-white hover:bg-primary-dark rounded-full w-10 h-10 flex items-center justify-center transition duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name"
                            className="border-neutral-300 focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com"
                            type="email"
                            className="border-neutral-300 focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your phone number"
                            type="tel"
                            className="border-neutral-300 focus:border-primary"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interested In</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-neutral-300 focus:border-primary">
                              <SelectValue placeholder="-- Select Service --" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="broking">Broking Services</SelectItem>
                            <SelectItem value="wealth">Wealth Management</SelectItem>
                            <SelectItem value="research">Equity Research</SelectItem>
                            <SelectItem value="mutualfunds">Mutual Funds</SelectItem>
                            <SelectItem value="other">Other Services</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?"
                          className="border-neutral-300 focus:border-primary"
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I consent to DevMani Traders contacting me with relevant information about their services. *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary-dark text-white w-full md:w-auto"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
