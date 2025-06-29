
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, BookOpen, Flower2, Coffee, Sparkles, Moon } from 'lucide-react';

const RelaxationActivities = () => {
  const activities = [
    {
      icon: Music,
      title: 'Calming Sounds',
      description: 'Nature sounds and peaceful melodies',
      color: 'bg-purple-50 hover:bg-purple-100 text-purple-600',
      action: () => console.log('Playing calming sounds')
    },
    {
      icon: BookOpen,
      title: 'Gentle Journal',
      description: 'Express your thoughts and feelings',
      color: 'bg-blue-50 hover:bg-blue-100 text-blue-600',
      action: () => console.log('Opening journal')
    },
    {
      icon: Flower2,
      title: 'Mindful Moments',
      description: 'Short meditation exercises',
      color: 'bg-green-50 hover:bg-green-100 text-green-600',
      action: () => console.log('Starting meditation')
    },
    {
      icon: Coffee,
      title: 'Self-Care Tips',
      description: 'Gentle reminders to care for yourself',
      color: 'bg-orange-50 hover:bg-orange-100 text-orange-600',
      action: () => console.log('Showing self-care tips')
    },
    {
      icon: Sparkles,
      title: 'Gratitude List',
      description: 'Focus on the good in your life',
      color: 'bg-yellow-50 hover:bg-yellow-100 text-yellow-600',
      action: () => console.log('Opening gratitude list')
    },
    {
      icon: Moon,
      title: 'Sleep Stories',
      description: 'Peaceful stories for restful sleep',
      color: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-600',
      action: () => console.log('Playing sleep stories')
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gradient">Relaxation Hub</h2>
        <p className="text-muted-foreground">Choose an activity to nurture your well-being</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group gentle-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={activity.action}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-full ${activity.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </div>
                <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Begin
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RelaxationActivities;
