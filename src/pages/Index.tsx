import { useState } from "react";
import { CareerForm } from "@/components/CareerForm";
import { AIResponse } from "@/components/AIResponse";
import { Card } from "@/components/ui/card";
import { Sparkles, Brain, Compass, Rocket } from "lucide-react";

export interface FormData {
  fullName: string;
  age: string;
  field: string;
  country: string;
  state: string;
  city: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 300));
    setFormData(data);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-radial py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Guidance</span>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Career Counseling <span className="text-gradient">with AI</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Personalized career advice based on your profile and location.
          </p>
        </header>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="p-4 flex gap-3">
            <Brain className="text-primary" />
            <div>
              <h3 className="font-semibold">Smart Analysis</h3>
              <p className="text-sm text-muted-foreground">AI insights</p>
            </div>
          </Card>

          <Card className="p-4 flex gap-3">
            <Compass className="text-primary" />
            <div>
              <h3 className="font-semibold">300+ Fields</h3>
              <p className="text-sm text-muted-foreground">Wide coverage</p>
            </div>
          </Card>

          <Card className="p-4 flex gap-3">
            <Rocket className="text-primary" />
            <div>
              <h3 className="font-semibold">Personalized</h3>
              <p className="text-sm text-muted-foreground">Just for you</p>
            </div>
          </Card>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Tell Us About You</h2>
            <CareerForm onSubmit={handleSubmit} isLoading={isLoading} />
          </Card>

          {formData ? (
            <AIResponse {...formData} />
          ) : (
            <Card className="p-8 text-center text-muted-foreground">
              AI response will appear here after submission.
            </Card>
          )}
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          Powered by AI • HuggingFace Router
        </footer>
      </div>
    </div>
  );
};

export default Index;
