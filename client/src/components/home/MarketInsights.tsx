import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, ArrowRight } from "lucide-react";

const insights = [
  {
    id: 1,
    title: "Q3 Market Outlook: Navigating Volatility",
    description: "Our analysts provide insights on market trends and potential opportunities in the upcoming quarter.",
    date: "Sep 15, 2023",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Top 5 Mutual Funds for Long-term Growth",
    description: "Discover the mutual funds with consistent performance and strong growth potential for long-term investors.",
    date: "Sep 10, 2023",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Sector Focus: Technology Stocks to Watch",
    description: "Our equity research team highlights promising technology stocks with strong fundamentals and growth potential.",
    date: "Sep 5, 2023",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
  }
];

const MarketInsights = () => {
  return (
    <section className="py-16 bg-neutral-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Market Insights
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Stay updated with the latest market trends and investment opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Card key={insight.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${insight.image})` }}
              ></div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-2">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>{insight.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                <p className="text-neutral-600 mb-4">{insight.description}</p>
                <Link href={`/insight/${insight.id}`}>
                  <a className="text-secondary hover:text-secondary-dark font-medium inline-flex items-center">
                    Read Analysis <ArrowRight className="ml-2 h-4 w-4" />
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

export default MarketInsights;
