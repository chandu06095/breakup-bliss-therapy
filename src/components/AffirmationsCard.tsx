
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, Heart } from 'lucide-react';

const AffirmationsCard = () => {
  const affirmations = [
    "I am healing at my own pace, and that's perfectly okay.",
    "I deserve love and happiness, starting with loving myself.",
    "This difficult time is temporary, and I will grow stronger.",
    "I release what no longer serves me with love and gratitude.",
    "I am worthy of peace, joy, and beautiful new beginnings.",
    "Every breath I take fills me with calm and serenity.",
    "I trust in my ability to create a bright future for myself.",
    "I am surrounded by love, even when I can't feel it.",
    "My heart is healing, and I am becoming whole again.",
    "I choose to focus on the positive possibilities ahead.",
    "I am brave, resilient, and capable of overcoming anything.",
    "Today I choose peace over worry, love over fear."
  ];

  const [currentAffirmation, setCurrentAffirmation] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    generateNewAffirmation();
  }, []);

  const generateNewAffirmation = () => {
    setIsVisible(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      setCurrentAffirmation(affirmations[randomIndex]);
      setIsVisible(true);
    }, 200);
  };

  return (
    <Card className="p-8 text-center space-y-6 gradient-healing">
      <div className="space-y-2">
        <div className="flex justify-center">
          <Heart className="w-8 h-8 text-rose-quartz animate-gentle-pulse" />
        </div>
        <h3 className="text-2xl font-semibold text-white">Daily Affirmation</h3>
        <p className="text-white/80">Words of healing and hope</p>
      </div>

      <div className={`min-h-[100px] flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-lg font-medium text-white leading-relaxed max-w-md">
          "{currentAffirmation}"
        </p>
      </div>

      <Button
        onClick={generateNewAffirmation}
        variant="secondary"
        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border-white/30"
      >
        <RefreshCw className="w-4 h-4" />
        New Affirmation
      </Button>
    </Card>
  );
};

export default AffirmationsCard;
