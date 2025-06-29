
import React from 'react';
import WelcomeHeader from '@/components/WelcomeHeader';
import RelaxationActivities from '@/components/RelaxationActivities';
import BreathingExercise from '@/components/BreathingExercise';
import MoodTracker from '@/components/MoodTracker';
import AffirmationsCard from '@/components/AffirmationsCard';

const Index = () => {
  return (
    <div className="min-h-screen gradient-calm">
      <div className="container mx-auto px-4 py-8 space-y-12">
        <WelcomeHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BreathingExercise />
          <MoodTracker />
        </div>
        
        <AffirmationsCard />
        
        <RelaxationActivities />
        
        <div className="text-center py-12 space-y-4">
          <p className="text-muted-foreground">
            Remember: Healing isn't linear. Some days will be harder than others, and that's okay.
          </p>
          <p className="text-sm text-muted-foreground">
            Take things one breath, one moment, one day at a time. 💜
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
