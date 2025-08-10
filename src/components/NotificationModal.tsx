import { useState } from 'react';
import { X, Bell, Gift, Trophy, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationModal = ({ isOpen, onClose }: NotificationModalProps) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: 'reward',
      icon: <Gift className="w-5 h-5 text-warning" />,
      title: 'Daily Bonus Available!',
      message: 'Claim your daily ₹50 bonus now',
      time: '2m ago',
      unread: true
    },
    {
      id: 2,
      type: 'tournament',
      icon: <Trophy className="w-5 h-5 text-gold" />,
      title: 'Tournament Starting Soon',
      message: 'Poker Championship begins in 30 minutes',
      time: '15m ago',
      unread: true
    },
    {
      id: 3,
      type: 'achievement',
      icon: <Star className="w-5 h-5 text-success" />,
      title: 'New Achievement Unlocked!',
      message: 'You\'ve reached Gold tier status',
      time: '1h ago',
      unread: false
    },
    {
      id: 4,
      type: 'update',
      icon: <Bell className="w-5 h-5 text-primary" />,
      title: 'Game Update Available',
      message: 'New features and bug fixes are ready',
      time: '3h ago',
      unread: false
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-game-purple to-game-purple-dark rounded-3xl p-6 max-w-sm w-full mx-4 relative shadow-glow-gold animate-scale-in max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Bell className="w-6 h-6 text-warning" />
            <h2 className="text-xl font-bold text-foreground">Notifications</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-foreground/70 hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Notifications list */}
        <div className="space-y-3 overflow-y-auto max-h-96">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-card/30 border rounded-xl p-4 transition-all hover:bg-card/50 ${
                notification.unread ? 'border-warning/50 shadow-glow-gold/30' : 'border-border/30'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-secondary/50 rounded-xl flex items-center justify-center">
                  {notification.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-foreground font-semibold text-sm">
                      {notification.title}
                    </h3>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-warning rounded-full animate-pulse-gold" />
                    )}
                  </div>
                  <p className="text-foreground/70 text-xs mb-2">
                    {notification.message}
                  </p>
                  <div className="flex items-center space-x-1 text-foreground/50">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">{notification.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-3 mt-6">
          <Button
            variant="outline"
            className="flex-1 border-border/50 text-foreground hover:bg-secondary/30"
          >
            Mark All Read
          </Button>
          <Button
            onClick={onClose}
            className="flex-1 bg-gradient-gold text-game-purple font-bold hover:opacity-90"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;