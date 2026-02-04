import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchableSelect } from "@/components/ui/SearchableSelect";
import { careerFields } from "@/data/careerFields";
import { countries } from "@/data/countries";
import { Sparkles, User, MapPin, Calendar, Briefcase } from "lucide-react";

interface FormData {
  fullName: string;
  age: string;
  field: string;
  country: string;
  state: string;
  city: string;
}

interface CareerFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

export function CareerForm({ onSubmit, isLoading }: CareerFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    age: "",
    field: "",
    country: "",
    state: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.fullName &&
    formData.age &&
    formData.field &&
    formData.country &&
    formData.state &&
    formData.city;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-foreground flex items-center gap-2">
          <User className="w-4 h-4 text-primary" />
          Full Name
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          className="h-12 bg-input border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
        />
      </div>

      {/* Age */}
      <div className="space-y-2">
        <Label htmlFor="age" className="text-foreground flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          Age
        </Label>
        <Input
          id="age"
          type="number"
          min="10"
          max="100"
          placeholder="Enter your age"
          value={formData.age}
          onChange={(e) => updateField("age", e.target.value)}
          className="h-12 bg-input border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
        />
      </div>

      {/* Career Field */}
      <div className="space-y-2">
        <Label className="text-foreground flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-primary" />
          Career Field
        </Label>
        <SearchableSelect
          options={careerFields}
          value={formData.field}
          onValueChange={(value) => updateField("field", value)}
          placeholder="Select your career field"
          searchPlaceholder="Search 300+ career fields..."
          emptyMessage="No career field found."
        />
      </div>

      {/* Location */}
      <div className="space-y-4">
        <Label className="text-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          Location
        </Label>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country" className="text-sm text-muted-foreground">
              Country
            </Label>
            <SearchableSelect
              options={countries}
              value={formData.country}
              onValueChange={(value) => updateField("country", value)}
              placeholder="Select country"
              searchPlaceholder="Search countries..."
              emptyMessage="No country found."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state" className="text-sm text-muted-foreground">
              State / Province
            </Label>
            <Input
              id="state"
              type="text"
              placeholder="Enter state"
              value={formData.state}
              onChange={(e) => updateField("state", e.target.value)}
              className="h-12 bg-input border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm text-muted-foreground">
              City
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="Enter city"
              value={formData.city}
              onChange={(e) => updateField("city", e.target.value)}
              className="h-12 bg-input border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={!isFormValid || isLoading}
        className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-sm hover:glow-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Analyzing...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Get AI Career Guidance
          </span>
        )}
      </Button>
    </form>
  );
}
