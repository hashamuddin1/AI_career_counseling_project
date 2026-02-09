import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";
import { OpenAI } from "openai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface AIResponseProps {
  fullName: string;
  age: string;
  field: string;
  country: string;
  state: string;
  city: string;
}

/**
 * 🚨 FRONTEND API USAGE (NOT PRODUCTION SAFE)
 */
const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.apiKey,
  dangerouslyAllowBrowser: true,
});

export function AIResponse({
  fullName,
  age,
  field,
  country,
  state,
  city,
}: AIResponseProps) {
  const [aiText, setAiText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAI = async () => {
      setLoading(true);

      const completion = await client.chat.completions.create({
        model: "openai/gpt-oss-120b:together",
        messages: [
          {
            role: "system",
            content: `
You are a professional AI career counselor.
Use markdown formatting.
Don't Use tables. Just simple text.
Be practical and motivational.
            `,
          },
          {
            role: "user",
            content: `
Name: ${fullName}
Age: ${age}
Field: ${field}
Location: ${city}, ${state}, ${country}

Provide:
1. Career Overview
2. Market Outlook
3. Recommended Steps
4. Pro Tips
            `,
          },
        ],
        temperature: 0.7,
        max_tokens: 800,
      });

      setAiText(completion.choices[0].message.content || "");
      setLoading(false);
    };

    fetchAI();
  }, [fullName, age, field, country, state, city]);

  return (
    <Card className="p-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <Brain className="text-primary" />
        <h2 className="text-xl font-semibold">
          AI Career Guidance for {fullName.split(" ")[0]}
        </h2>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Thinking… 🤖</p>
      ) : (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{aiText}</ReactMarkdown>
        </div>
      )}
    </Card>
  );
}
