import { useState } from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RealTimeClock from './RealTimeClock';

interface AddCashScreenProps {
  onBack: () => void;
}

const AddCashScreen = ({ onBack }: AddCashScreenProps) => {
  const [amount, setAmount] = useState('100');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [showKeypad, setShowKeypad] = useState(false);
  const [appliedCoupons, setAppliedCoupons] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  const quickAmounts = [
    { value: '50', bonus: '25', label: '₹50' },
    { value: '100', bonus: '50', label: '₹100' },
    { value: '200', bonus: '100', label: '₹200' },
    { value: '500', bonus: '250', label: '₹500' },
    { value: '1000', bonus: '500', label: '₹1000' },
    { value: '2000', bonus: '1000', label: '₹2000' }
  ];

  const lectureOffers = [
    { 
      game: 'poker', 
      icon: '🎰', 
      title: 'Get your third lecture for Poker',
      subtitle: 'Minimum amount required to apply coupon is ₹500',
      minAmount: 500,
      applied: appliedCoupons.includes('poker')
    },
    { 
      game: 'rummy', 
      icon: '🃏', 
      title: 'Get your first lecture for Rummy',
      subtitle: 'Minimum amount required to apply coupon is ₹300',
      minAmount: 300,
      applied: appliedCoupons.includes('rummy')
    },
    { 
      game: 'chess', 
      icon: '♟️', 
      title: 'Get your second lecture for Chess',
      subtitle: 'Minimum amount required to apply coupon is ₹400',
      minAmount: 400,
      applied: appliedCoupons.includes('chess')
    }
  ];

  const handleQuickAmount = (value: string) => {
    setAmount(value);
    setSelectedAmount(value);
    setIsEditing(false);
  };

  const canApplyCoupon = (minAmount: number) => {
    return parseInt(amount) >= minAmount;
  };

  const handleApplyCoupon = (gameType: string, minAmount: number) => {
    if (canApplyCoupon(minAmount)) {
      setAppliedCoupons([...appliedCoupons, gameType]);
    }
  };

  const bonusAmount = amount ? (parseInt(amount) * 0.5).toString() : '0';
  const totalAmount = amount ? (parseInt(amount) + parseInt(bonusAmount)).toString() : '0';

  return (
    <div className="h-full w-full bg-gradient-purple flex flex-col overflow-hidden">
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 py-4 text-foreground text-sm font-medium">
        <RealTimeClock />
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-foreground rounded"></div>
            <div className="w-1 h-3 bg-foreground rounded"></div>
            <div className="w-1 h-3 bg-muted rounded"></div>
            <div className="w-1 h-3 bg-muted rounded"></div>
          </div>
          <span className="ml-2">📶</span>
          <span>65</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-foreground hover:bg-secondary/30"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-foreground font-bold text-xl">ADD CASH</h1>
        </div>
        <div className="text-right">
          <div className="text-foreground/70 text-sm">Wallet Balance</div>
          <div className="text-foreground font-bold">₹20</div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto px-6 space-y-6">
        {/* Amount input */}
        <div className="bg-card rounded-2xl p-6">
          <div className="text-center">
            <div className="text-primary text-sm mb-2">Enter Any Amount</div>
            {isEditing ? (
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-foreground mr-2">₹</span>
                <input 
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
                  className="text-4xl font-bold text-foreground bg-transparent border-b-2 border-primary focus:outline-none text-center w-32"
                  autoFocus
                />
              </div>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className="text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors"
              >
                ₹{amount}
              </button>
            )}
            <div className="bg-success/20 text-success rounded-lg p-3 text-sm">
              You will get ₹{totalAmount} in your wallet
            </div>
          </div>
        </div>

        {/* Quick Amount Selection */}
        <div className="bg-card rounded-2xl p-4">
          <h3 className="text-foreground font-bold mb-3">Quick Select</h3>
          <div className="grid grid-cols-3 gap-2">
            {quickAmounts.map((item) => (
              <button
                key={item.value}
                onClick={() => handleQuickAmount(item.value)}
                className={`p-3 rounded-xl font-medium transition-all ${
                  selectedAmount === item.value || amount === item.value
                    ? 'bg-gradient-gold text-game-purple shadow-glow-gold'
                    : 'bg-secondary/20 text-foreground hover:bg-secondary/40'
                }`}
              >
                <div className="text-sm">{item.label}</div>
                <div className="text-xs opacity-80">+₹{item.bonus}</div>
              </button>
            ))}
          </div>
        </div>


        {/* Bonus offer */}
        <div className="bg-card rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-lg">💰</span>
              </div>
              <div>
                <div className="text-foreground font-bold">100% Bonus offer</div>
                <div className="text-foreground/70 text-sm">Get 100% bonus upto ₹50 on deposit.</div>
                <div className="text-foreground/70 text-sm">Minimum amount required: ₹0</div>
              </div>
            </div>
            <div className="bg-success/20 text-success px-3 py-1 rounded-lg text-sm">
              Applied
            </div>
          </div>
        </div>

        {/* Special Offers - Lecture Coupons */}
        <div>
          <div className="text-foreground font-bold text-lg mb-4">Special Offers</div>
          <div className="space-y-3">
            {lectureOffers.filter(offer => !offer.applied).map((offer) => {
              const eligible = canApplyCoupon(offer.minAmount);
              return (
                <div 
                  key={offer.game} 
                  className={`rounded-xl p-4 border-2 transition-all ${
                    eligible 
                      ? 'bg-gradient-to-r from-card to-card-glow/30 border-gold/30 shadow-glow-gold'
                      : 'bg-card/50 border-muted/30 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                        eligible ? 'bg-gradient-gold' : 'bg-muted/30'
                      }`}>
                        <span className={`text-lg ${eligible ? 'text-game-purple' : 'text-muted-foreground'}`}>
                          {offer.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-foreground font-bold text-sm">{offer.title}</div>
                        <div className="text-foreground/70 text-xs mt-1">{offer.subtitle}</div>
                        {!eligible && (
                          <div className="text-warning text-xs mt-1 font-medium">
                            Add ₹{offer.minAmount - parseInt(amount)} more to apply
                          </div>
                        )}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleApplyCoupon(offer.game, offer.minAmount)}
                      disabled={!eligible}
                      className={`font-bold px-4 py-2 text-xs ${
                        eligible 
                          ? 'bg-gradient-gold text-game-purple hover:opacity-90'
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      {eligible ? 'Apply' : 'Locked'}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Applied Coupons Section */}
          {appliedCoupons.length > 0 && (
            <div className="mt-6">
              <div className="text-foreground font-bold text-lg mb-4">Applied Coupons</div>
              <div className="space-y-3">
                {lectureOffers.filter(offer => offer.applied).map((offer) => (
                  <div key={`applied-${offer.game}`} className="bg-success/20 border-2 border-success/50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-success/30 rounded-xl flex items-center justify-center">
                          <span className="text-success text-lg">{offer.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-foreground font-bold text-sm">{offer.title}</div>
                          <div className="text-success text-xs mt-1">Successfully Applied!</div>
                        </div>
                      </div>
                      <div className="bg-success/30 text-success px-3 py-1 rounded-lg text-xs font-medium">
                        ✓ Applied
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="text-foreground/60 text-xs mt-3 text-center">
            Lectures will be delivered to your registered email ID.
          </div>
        </div>

        {/* Add now button */}
        <Button className="w-full bg-success hover:bg-success/90 text-success-foreground font-bold text-lg py-6 rounded-2xl">
          ADD NOW
        </Button>

        {/* Number pad */}
        {showKeypad && (
          <div className="grid grid-cols-3 gap-3 pb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => {
                if (amount === '0' || !amount) {
                  setAmount(num.toString());
                } else {
                  setAmount(amount + num.toString());
                }
                setSelectedAmount('');
              }}
              className="bg-card rounded-xl py-4 text-foreground font-bold text-xl hover:bg-secondary/30 transition-colors"
            >
              {num}
              {num === 2 && <div className="text-xs text-foreground/50">ABC</div>}
              {num === 3 && <div className="text-xs text-foreground/50">DEF</div>}
              {num === 4 && <div className="text-xs text-foreground/50">GHI</div>}
              {num === 5 && <div className="text-xs text-foreground/50">JKL</div>}
              {num === 6 && <div className="text-xs text-foreground/50">MNO</div>}
              {num === 7 && <div className="text-xs text-foreground/50">PQRS</div>}
              {num === 8 && <div className="text-xs text-foreground/50">TUV</div>}
              {num === 9 && <div className="text-xs text-foreground/50">WXYZ</div>}
            </button>
          ))}
          <div></div>
          <button
            onClick={() => {
              setAmount(amount + '0');
              setSelectedAmount('');
            }}
            className="bg-card rounded-xl py-4 text-foreground font-bold text-xl hover:bg-secondary/30 transition-colors"
          >
            0
          </button>
          <button
            onClick={() => {
              setAmount(amount.slice(0, -1) || '0');
              setSelectedAmount('');
            }}
            className="bg-card rounded-xl py-4 text-foreground font-bold text-xl hover:bg-secondary/30 transition-colors"
          >
            ⌫
          </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCashScreen;