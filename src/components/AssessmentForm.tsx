import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, Brain, MapPin, Star } from "lucide-react";

const AssessmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    marks: "",
    location: "",
    interests: [] as string[],
    skills: [] as string[],
    preferences: [] as string[]
  });

  const interests = [
    "Science & Technology", "Arts & Literature", "Commerce & Business", 
    "Social Sciences", "Medicine & Healthcare", "Engineering", 
    "Law & Governance", "Education & Teaching"
  ];

  const skills = [
    "Analytical Thinking", "Creative Problem Solving", "Communication", 
    "Leadership", "Technical Skills", "Research", "Public Speaking", "Mathematics"
  ];

  const preferences = [
    "Government Job Security", "Private Sector Growth", "Entrepreneurship", 
    "Research & Development", "Social Impact", "High Salary", "Work-Life Balance"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-4">Discover Your Path</h2>
          <p className="text-xl text-muted-foreground">Tell us about yourself to get personalized career recommendations</p>
        </div>

        <Card className="p-8 shadow-card">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="class" className="text-base font-medium">Current/Last Class</Label>
                <Select onValueChange={(value) => setFormData({...formData, class: value})}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10th">10th Pass</SelectItem>
                    <SelectItem value="12th">12th Pass</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="marks" className="text-base font-medium">Academic Performance (%)</Label>
                <Input 
                  id="marks" 
                  type="number" 
                  placeholder="Enter your percentage"
                  value={formData.marks}
                  onChange={(e) => setFormData({...formData, marks: e.target.value})}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location" className="text-base font-medium">Location in J&K</Label>
                <Select onValueChange={(value) => setFormData({...formData, location: value})}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your district" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="srinagar">Srinagar</SelectItem>
                    <SelectItem value="jammu">Jammu</SelectItem>
                    <SelectItem value="anantnag">Anantnag</SelectItem>
                    <SelectItem value="baramulla">Baramulla</SelectItem>
                    <SelectItem value="udhampur">Udhampur</SelectItem>
                    <SelectItem value="kupwara">Kupwara</SelectItem>
                    <SelectItem value="rajouri">Rajouri</SelectItem>
                    <SelectItem value="kathua">Kathua</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <Label className="text-lg font-semibold">Areas of Interest</Label>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox 
                      id={interest}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({...formData, interests: [...formData.interests, interest]});
                        } else {
                          setFormData({...formData, interests: formData.interests.filter(i => i !== interest)});
                        }
                      }}
                    />
                    <Label htmlFor={interest} className="text-sm font-medium">{interest}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary" />
                <Label className="text-lg font-semibold">Your Strengths</Label>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox 
                      id={skill}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({...formData, skills: [...formData.skills, skill]});
                        } else {
                          setFormData({...formData, skills: formData.skills.filter(s => s !== skill)});
                        }
                      }}
                    />
                    <Label htmlFor={skill} className="text-sm font-medium">{skill}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <Label className="text-lg font-semibold">Career Preferences</Label>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {preferences.map((preference) => (
                  <div key={preference} className="flex items-center space-x-2">
                    <Checkbox 
                      id={preference}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({...formData, preferences: [...formData.preferences, preference]});
                        } else {
                          setFormData({...formData, preferences: formData.preferences.filter(p => p !== preference)});
                        }
                      }}
                    />
                    <Label htmlFor={preference} className="text-sm font-medium">{preference}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-6">
              <Button variant="primary" size="lg" className="px-12 py-4 text-lg shadow-hero">
                Get My Career Recommendations
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentForm;