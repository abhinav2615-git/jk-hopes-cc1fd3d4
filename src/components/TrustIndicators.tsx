import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, MapPin, CheckCircle, Star } from "lucide-react";

const TrustIndicators = () => {
  const partnerships = [
    {
      title: "Government of Jammu & Kashmir",
      subtitle: "Official Education Partner",
      icon: Shield,
      description: "Authorized by J&K Higher Education Department"
    },
    {
      title: "50+ Government Colleges",
      subtitle: "Direct Institution Network",
      icon: Award,
      description: "Verified partnerships with accredited colleges"
    },
    {
      title: "10,000+ Students Guided",
      subtitle: "Proven Track Record",
      icon: Users,
      description: "Successfully placed in higher education programs"
    },
    {
      title: "All Districts Covered",
      subtitle: "Complete J&K Coverage",
      icon: MapPin,
      description: "Serving students from Kashmir to Jammu region"
    }
  ];

  const certifications = [
    "Ministry of Education Recognized",
    "ISO 27001 Data Security Certified",
    "NASSCOM Partner for Skill Development",
    "UGC Approved Guidance Framework"
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-success mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Trusted by Students & Government</h2>
          <p className="text-xl text-muted-foreground">Official partnerships ensuring quality education pathways</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnerships.map((item, index) => (
            <Card key={index} className="p-6 text-center shadow-card card-hover bg-background">
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <Badge variant="secondary" className="mb-3">{item.subtitle}</Badge>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 shadow-card bg-gradient-subtle">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-success mr-4" />
              <h3 className="text-2xl font-bold text-foreground">Official Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 shadow-card bg-gradient-subtle">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-accent mr-4" />
              <h3 className="text-2xl font-bold text-foreground">Recognition & Awards</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-foreground">Best Education Platform J&K</span>
                <Badge className="bg-accent/10 text-accent">2024</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Digital India Innovation Award</span>
                <Badge className="bg-accent/10 text-accent">2023</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Student Choice Award</span>
                <Badge className="bg-accent/10 text-accent">2023</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Excellence in Career Guidance</span>
                <Badge className="bg-accent/10 text-accent">2022</Badge>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 bg-success/10 rounded-full mb-4">
            <Shield className="w-6 h-6 text-success mr-2" />
            <span className="text-success font-semibold">100% Secure & Confidential</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your personal information and career preferences are protected with bank-level security. 
            We are committed to your privacy and educational success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;