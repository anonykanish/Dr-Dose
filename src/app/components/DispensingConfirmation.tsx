import { CheckCircle, Pill, TrendingUp } from 'lucide-react';

interface DispensingConfirmationProps {
  onContinue: () => void;
  onReorder: () => void;
  remainingTablets: number;
}

export function DispensingConfirmation({ onContinue, onReorder, remainingTablets }: DispensingConfirmationProps) {
  const isLowStock = remainingTablets <= 2;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Success Icon with Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative animate-[scale-in_0.5s_ease-out]">
            <div className="w-32 h-32 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-[#16A34A] animate-[check-mark_0.6s_ease-out]" />
            </div>
            {/* Pill Icon Overlay with Animation */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white border-2 border-green-200 flex items-center justify-center shadow-md animate-[pill-drop_0.8s_ease-out]">
              <Pill className="w-6 h-6 text-teal-600" />
            </div>
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-green-200 animate-[ripple_1s_ease-out]"></div>
          </div>
        </div>

        {/* Success Title */}
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-2 animate-[fade-in_0.6s_ease-out_0.3s_both]">
          Tablet Dispensed Successfully
        </h1>

        <p className="text-center text-gray-600 mb-8 animate-[fade-in_0.6s_ease-out_0.4s_both]">
          Your medicine is ready
        </p>

        {/* Info Cards */}
        <div className="space-y-4 mb-8">
          {/* Remaining Tablets */}
          <div className={`rounded-2xl p-5 border animate-[slide-up_0.6s_ease-out_0.5s_both] ${
            isLowStock ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-100'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  isLowStock ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <Pill className={`w-5 h-5 ${isLowStock ? 'text-[#DC2626]' : 'text-[#2563EB]'}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tablets Remaining</p>
                  <p className={`text-xl font-semibold ${
                    isLowStock ? 'text-[#DC2626]' : 'text-gray-900'
                  }`}>
                    {remainingTablets}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AQS Update */}
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100 animate-[slide-up_0.6s_ease-out_0.6s_both]">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-[#16A34A]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Adherence Recorded
                </p>
                <p className="text-sm text-gray-700">
                  AQS Updated – Great job staying on track!
                </p>
              </div>
            </div>
          </div>

          {/* Low Stock Warning if applicable */}
          {isLowStock && (
            <div className="bg-orange-50 rounded-2xl p-5 border-2 border-orange-200 animate-[slide-up_0.6s_ease-out_0.7s_both]">
              <p className="text-sm text-gray-700 mb-4">
                <span className="font-semibold text-orange-800">Running low:</span> Only {remainingTablets} tablet{remainingTablets !== 1 ? 's' : ''} remaining. 
                Consider reordering now.
              </p>
              <button
                onClick={onReorder}
                className="w-full bg-[#F97316] text-white py-3 rounded-xl text-base font-semibold hover:bg-orange-600 transition-colors shadow-sm"
              >
                Reorder Now
              </button>
            </div>
          )}
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full bg-[#2563EB] text-white py-5 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md animate-[slide-up_0.6s_ease-out_0.8s_both]"
        >
          Continue
        </button>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes check-mark {
          0% {
            transform: scale(0) rotate(-45deg);
          }
          50% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes pill-drop {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          60% {
            transform: translateY(10px) rotate(360deg);
          }
          80% {
            transform: translateY(-5px) rotate(360deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
            opacity: 1;
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}