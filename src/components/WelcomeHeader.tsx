
import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const WelcomeHeader = () => {
  return (
    <div className="text-center space-y-6 py-12">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-16 h-16 text-lavender/30 float-animation" />
        </div>
        <Heart className="w-20 h-20 mx-auto text-rose-quartz animate-gentle-pulse relative z-10" />
      </div>
      
      <div className="space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gradient leading-tight">
          Healing Hearts
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A gentle space for recovery, self-care, and finding peace after heartbreak. 
          You're not alone in this journey.
        </p>
      </div>

      <div className="flex justify-center space-x-2 text-sm text-muted-foreground">
        <span>✨</span>
        <span>Take your time</span>
        <span>•</span>
        <span>Be gentle with yourself</span>
        <span>•</span>
        <span>You deserve peace</span>
        <span>✨</span>
      </div>
    </div>
  );
};

export default WelcomeHeader;
