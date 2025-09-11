import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, MapPin, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="bounce-in">
          <div className="mb-8">
            <GraduationCap className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Shape Your
              <span className="block text-accent-glow">Future Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover your perfect career path with personalized guidance tailored for Jammu & Kashmir students. 
              Connect with government colleges and unlock opportunities in higher education.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="accent" size="lg" className="shadow-hero text-lg px-8 py-4">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
              For Parents
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 card-hover">
              <Users className="w-12 h-12 text-accent-glow mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">10,000+ Students Guided</h3>
              <p className="text-white/80">Successfully helped students find their ideal career paths</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 card-hover">
              <MapPin className="w-12 h-12 text-accent-glow mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">50+ Government Colleges</h3>
              <p className="text-white/80">Direct partnerships with J&K government institutions</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 card-hover">
              <TrendingUp className="w-12 h-12 text-accent-glow mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">95% Success Rate</h3>
              <p className="text-white/80">Students successfully enrolled in higher education</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;