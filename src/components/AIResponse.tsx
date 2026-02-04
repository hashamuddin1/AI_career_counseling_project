import { Card } from "@/components/ui/card";
import { Brain, Target, TrendingUp, BookOpen, Lightbulb } from "lucide-react";

interface AIResponseProps {
  fullName: string;
  age: string;
  field: string;
  country: string;
  state: string;
  city: string;
}

export function AIResponse({ fullName, age, field, country, state, city }: AIResponseProps) {
  const firstName = fullName.split(" ")[0];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
          <Brain className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">
            Career Analysis for {firstName}
          </h2>
          <p className="text-muted-foreground">
            Personalized guidance for {field}
          </p>
        </div>
      </div>

      <Card className="p-6 bg-card border-border border-glow">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Career Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              Hello {firstName}! Based on your interest in <span className="text-primary font-medium">{field}</span> at age {age}, 
              you're at an excellent point to build a strong foundation in this field. Located in {city}, {state}, {country}, 
              you have access to various opportunities that can help accelerate your career growth.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border border-glow">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Market Outlook</h3>
            <p className="text-muted-foreground leading-relaxed">
              The {field} industry continues to show strong growth potential. In {country}, particularly in the {state} region, 
              there's increasing demand for skilled professionals. The next 5-10 years look promising with emerging technologies 
              and evolving industry standards creating new opportunities.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border border-glow">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Recommended Steps</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Pursue relevant certifications and formal education in {field}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Build a portfolio of projects to demonstrate practical skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Network with professionals in {city}'s {field} community</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Stay updated with industry trends and emerging technologies</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border border-glow">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Lightbulb className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Pro Tips</h3>
            <p className="text-muted-foreground leading-relaxed">
              At {age} years old, you have the advantage of time to develop deep expertise. Focus on building strong fundamentals 
              rather than chasing trends. Consider finding a mentor in {field} who can guide your career trajectory. 
              Remember, consistency and continuous learning are your greatest assets in {field}.
            </p>
          </div>
        </div>
      </Card>

      <div className="p-4 rounded-lg bg-secondary/50 border border-border">
        <p className="text-sm text-muted-foreground text-center">
          <span className="text-primary">💡 Note:</span> This is placeholder content. 
          Connect OpenAI API to receive personalized AI-powered career guidance.
        </p>
      </div>
    </div>
  );
}
