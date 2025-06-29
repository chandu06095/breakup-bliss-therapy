
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Smile, Meh, Frown, Angry } from 'lucide-react';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [savedMoods, setSavedMoods] = useState<Array<{ mood: number; date: string }>>([]);

  const moods = [
    { icon: Heart, label: 'Amazing', color: 'text-rose-500', bg: 'bg-rose-50 hover:bg-rose-100' },
    { icon: Smile, label: 'Happy', color: 'text-yellow-500', bg: 'bg-yellow-50 hover:bg-yellow-100' },
    { icon: Meh, label: 'Okay', color: 'text-blue-500', bg: 'bg-blue-50 hover:bg-blue-100' },
    { icon: Frown, label: 'Sad', color: 'text-purple-500', bg: 'bg-purple-50 hover:bg-purple-100' },
    { icon: Angry, label: 'Angry', color: 'text-red-500', bg: 'bg-red-50 hover:bg-red-100' },
  ];

  const saveMood = () => {
    if (selectedMood !== null) {
      const newMood = {
        mood: selectedMood,
        date: new Date().toLocaleDateString()
      };
      setSavedMoods([newMood, ...savedMoods.slice(0, 6)]);
      setSelectedMood(null);
    }
  };

  return (
    <Card className="p-6 space-y-6 bg-gradient-to-br from-warm-white to-sage/10">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-semibold text-gradient">How are you feeling?</h3>
        <p className="text-muted-foreground">Track your emotional journey</p>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {moods.map((mood, index) => {
          const Icon = mood.icon;
          return (
            <button
              key={index}
              onClick={() => setSelectedMood(index)}
              className={`p-4 rounded-xl transition-all duration-200 ${mood.bg} ${
                selectedMood === index ? 'ring-2 ring-primary transform scale-105' : ''
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <Icon className={`w-8 h-8 ${mood.color}`} />
                <span className="text-xs font-medium text-gray-600">{mood.label}</span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedMood !== null && (
        <div className="text-center">
          <Button onClick={saveMood} className="bg-primary hover:bg-primary/90">
            Save Mood
          </Button>
        </div>
      )}

      {savedMoods.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-semibold text-primary">Recent Moods</h4>
          <div className="grid grid-cols-7 gap-2">
            {savedMoods.map((entry, index) => {
              const Icon = moods[entry.mood].icon;
              return (
                <div key={index} className="text-center p-2 rounded-lg bg-white/50">
                  <Icon className={`w-5 h-5 mx-auto ${moods[entry.mood].color}`} />
                  <div className="text-xs text-muted-foreground mt-1">{entry.date}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
};

export default MoodTracker;
