import { useState } from "react";
import { CareerForm } from "@/components/CareerForm";
import { AIResponse } from "@/components/AIResponse";
import { Card } from "@/components/ui/card";
import { Sparkles, Brain, Compass, Rocket } from "lucide-react";

interface FormData {
  fullName: string;
  age: string;
  field: string;
  country: string;
  state: string;
  city: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<FormData | null>(null);

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setResponse(data);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-radial relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />
      </div>

      <div className="container relative z-10 py-12 px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            <span className="text-sm text-primary font-medium">AI-Powered Guidance</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-foreground">Career Counseling</span>
            <br />
            <span className="text-gradient">with AI</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized career guidance powered by artificial intelligence. 
            Discover the perfect path for your future based on your skills, location, and aspirations.
          </p>
        </header>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          <Card className="p-4 bg-card/50 border-border backdrop-blur-sm flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Smart Analysis</h3>
              <p className="text-xs text-muted-foreground">AI-driven insights</p>
            </div>
          </Card>
          
          <Card className="p-4 bg-card/50 border-border backdrop-blur-sm flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Compass className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">300+ Fields</h3>
              <p className="text-xs text-muted-foreground">Comprehensive coverage</p>
            </div>
          </Card>
          
          <Card className="p-4 bg-card/50 border-border backdrop-blur-sm flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Personalized</h3>
              <p className="text-xs text-muted-foreground">Tailored to you</p>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <Card className="p-6 md:p-8 bg-card border-border border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Compass className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">
                  Tell Us About You
                </h2>
              </div>
              <CareerForm onSubmit={handleSubmit} isLoading={isLoading} />
            </Card>

            {/* Response Section */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              {response ? (
                <AIResponse {...response} />
              ) : (
                <Card className="p-8 bg-card/50 border-border border-dashed h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 mb-4">
                    <Brain className="w-10 h-10 text-primary/50" />
                  </div>
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                    AI Response Will Appear Here
                  </h3>
                  <p className="text-sm text-muted-foreground/70 max-w-xs">
                    Fill out the form and submit to receive personalized career counseling from our AI advisor.
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by AI • Ready for OpenAI Integration
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
