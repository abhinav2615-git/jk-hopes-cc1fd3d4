import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, MapPin, Users, TrendingUp, Award, Filter } from "lucide-react";

const CourseRecommendations = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const courses = [
    {
      id: 1,
      title: "Bachelor of Computer Applications (BCA)",
      college: "Government Degree College, Srinagar",
      match: 95,
      duration: "3 Years",
      seats: 60,
      fees: "₹15,000/year",
      placement: "85%",
      avgSalary: "₹4.2L",
      category: "technology",
      whyChoose: [
        "High demand in IT sector",
        "Government college with affordable fees",
        "Strong alumni network in tech companies",
        "Practical coding skills development"
      ],
      keySubjects: ["Programming", "Database Management", "Web Development", "Software Engineering"],
      eligibility: "10+2 with Mathematics"
    },
    {
      id: 2,
      title: "Bachelor of Commerce (B.Com)",
      college: "Government College for Women, Jammu",
      match: 88,
      duration: "3 Years",
      seats: 120,
      fees: "₹12,000/year",
      placement: "70%",
      avgSalary: "₹3.5L",
      category: "commerce",
      whyChoose: [
        "Versatile degree with multiple career paths",
        "Gateway to professional courses like CA, CS",
        "Strong foundation in business and finance",
        "Excellent faculty and infrastructure"
      ],
      keySubjects: ["Accounting", "Business Studies", "Economics", "Statistics"],
      eligibility: "10+2 in any stream"
    },
    {
      id: 3,
      title: "Bachelor of Science (Physics)",
      college: "Government Degree College, Baramulla",
      match: 82,
      duration: "3 Years",
      seats: 40,
      fees: "₹14,000/year",
      placement: "65%",
      avgSalary: "₹3.8L",
      category: "science",
      whyChoose: [
        "Foundation for research and higher studies",
        "Path to teaching and government jobs",
        "Strong analytical and problem-solving skills",
        "Opportunities in emerging tech fields"
      ],
      keySubjects: ["Classical Mechanics", "Quantum Physics", "Thermodynamics", "Electronics"],
      eligibility: "10+2 with Physics and Mathematics"
    }
  ];

  const filteredCourses = selectedFilter === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedFilter);

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Award className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Your Personalized Recommendations</h2>
          <p className="text-xl text-muted-foreground mb-8">Courses tailored to your interests, skills, and academic performance</p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Filter className="w-5 h-5 text-primary" />
            <Select onValueChange={setSelectedFilter} defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="commerce">Commerce</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="p-6 shadow-card card-hover bg-card relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-success/10 text-success font-semibold">
                  {course.match}% Match
                </Badge>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{course.college}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span>{course.seats} seats</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-secondary rounded-lg">
                  <div className="text-lg font-bold text-foreground">{course.fees}</div>
                  <div className="text-xs text-muted-foreground">Annual Fees</div>
                </div>
                <div className="text-center p-3 bg-secondary rounded-lg">
                  <div className="text-lg font-bold text-success">{course.placement}</div>
                  <div className="text-xs text-muted-foreground">Placement Rate</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-success" />
                  Why Choose This Course?
                </h4>
                <ul className="space-y-2">
                  {course.whyChoose.slice(0, 2).map((reason, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Button variant="primary" className="w-full">
                  View Detailed Comparison
                </Button>
                <Button variant="outline" className="w-full">
                  Connect with Alumni
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" className="px-8">
            View All 50+ Courses Available
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseRecommendations;