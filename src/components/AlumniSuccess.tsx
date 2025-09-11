import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, Briefcase, GraduationCap, Users } from "lucide-react";

const AlumniSuccess = () => {
  const alumni = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "BCA from Govt. Degree College, Srinagar",
      yearGraduated: 2020,
      currentRole: "Software Engineer at Infosys",
      salary: "₹8.5 LPA",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c993?w=150&h=150&fit=crop&crop=face",
      story: "From a small town in Kashmir to working at a Fortune 500 company. The practical coding skills I learned helped me crack technical interviews.",
      achievement: "Promoted twice in 3 years",
      tips: "Focus on practical projects, not just theory. The government college gave me a solid foundation at an affordable cost."
    },
    {
      id: 2,
      name: "Rohit Kumar",
      course: "B.Com from Govt. College, Jammu",
      yearGraduated: 2019,
      currentRole: "Chartered Accountant",
      salary: "₹12 LPA",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      story: "B.Com from a government college opened doors to CA preparation. The affordable education allowed me to invest in coaching.",
      achievement: "All India Rank 50 in CA Final",
      tips: "Government colleges provide quality education at low cost. Use the savings for professional courses and skill development."
    },
    {
      id: 3,
      name: "Anjali Devi",
      course: "B.Sc Physics from Govt. College, Baramulla",
      yearGraduated: 2021,
      currentRole: "Research Scientist at ISRO",
      salary: "₹9.5 LPA",
      location: "Thiruvananthapuram",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
      story: "My physics degree from a government college was the stepping stone to my dream job at ISRO. The faculty guidance was exceptional.",
      achievement: "Published 5 research papers",
      tips: "Government college education is world-class. Focus on understanding concepts deeply and participating in research projects."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories That Inspire</h2>
          <p className="text-xl text-muted-foreground">Real J&K students who transformed their lives through government college education</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {alumni.map((person) => (
            <Card key={person.id} className="p-6 shadow-card card-hover bg-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent"></div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-foreground">{person.name}</h3>
                  <p className="text-sm text-muted-foreground">{person.currentRole}</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-accent mr-1" />
                    <span className="text-sm font-semibold text-accent">{person.salary}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">
                  <GraduationCap className="w-3 h-3 mr-1" />
                  Class of {person.yearGraduated}
                </Badge>
                <p className="text-sm text-muted-foreground">{person.course}</p>
              </div>

              <div className="mb-4">
                <Quote className="w-4 h-4 text-primary mb-2" />
                <p className="text-sm text-foreground italic leading-relaxed">"{person.story}"</p>
              </div>

              <div className="mb-4 p-3 bg-success/5 rounded-lg border-l-4 border-success">
                <div className="flex items-center mb-1">
                  <Briefcase className="w-4 h-4 text-success mr-2" />
                  <span className="text-sm font-semibold text-success">Key Achievement</span>
                </div>
                <p className="text-sm text-foreground">{person.achievement}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">💡 Advice for You:</h4>
                <p className="text-sm text-muted-foreground">{person.tips}</p>
              </div>

              <Button variant="outline" className="w-full">
                Connect & Get Mentorship
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Alumni Network</h3>
            <p className="text-muted-foreground mb-6">Get mentorship, career guidance, and networking opportunities from 10,000+ successful graduates</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Explore More Success Stories
              </Button>
              <Button variant="accent" size="lg">
                Connect with Mentors
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSuccess;