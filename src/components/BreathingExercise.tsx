
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Pause, RotateCcw } from 'lucide-react';

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(4);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === 1) {
            if (phase === 'inhale') {
              setPhase('hold');
              return 4;
            } else if (phase === 'hold') {
              setPhase('exhale');
              return 4;
            } else {
              setPhase('inhale');
              setCycles(prev => prev + 1);
              return 4;
            }
          }
          return prevCount - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setPhase('inhale');
    setCount(4);
    setCycles(0);
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'inhale': return 'bg-sage/20 border-sage';
      case 'hold': return 'bg-lavender/20 border-lavender';
      case 'exhale': return 'bg-rose-quartz/20 border-rose-quartz';
    }
  };

  return (
    <Card className="p-8 text-center space-y-6 bg-gradient-to-br from-warm-white to-lavender/10">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-gradient">Breathing Exercise</h3>
        <p className="text-muted-foreground">Follow the rhythm to find your calm</p>
      </div>

      <div className={`relative w-32 h-32 mx-auto rounded-full border-4 ${getPhaseColor()} transition-all duration-1000 ${isActive ? 'breathe-animation' : ''}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{count}</div>
            <div className="text-sm font-medium text-muted-foreground">{getPhaseText()}</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Cycles completed: <span className="font-semibold text-primary">{cycles}</span>
        </div>
        
        <div className="flex gap-3 justify-center">
          <Button
            onClick={handleToggle}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isActive ? 'Pause' : 'Start'}
          </Button>
          
          <Button
            onClick={handleReset}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BreathingExercise;
