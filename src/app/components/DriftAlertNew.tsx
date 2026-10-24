import { ArrowLeft, AlertTriangle, TrendingDown } from 'lucide-react';

interface DriftAlertNewProps {
  onBack: () => void;
  onTakeNow: () => void;
  onNotifyDoctor: () => void;
}

export function DriftAlertNew({ onBack, onTakeNow, onNotifyDoctor }: DriftAlertNewProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-red-50 to-white px-6 py-5 border-b border-gray-100">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            Alert
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 space-y-6">
        {/* Main Alert Card */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-lg p-8 border-2 border-red-200">
          <div className="text-center">
            {/* Warning Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-red-200 flex items-center justify-center shadow-sm">
                <AlertTriangle className="w-12 h-12 text-[#DC2626]" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Prescription Drift Detected
            </h2>

            {/* Details */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <TrendingDown className="w-5 h-5 text-[#DC2626] mr-2" />
                  <span className="text-sm font-medium text-gray-700">
                    Adherence Quality Score
                  </span>
                </div>
                <p className="text-3xl font-bold text-[#DC2626]">
                  92 → 67
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="text-base text-gray-700 leading-relaxed">
                  Dose time shifting later each day
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={onTakeNow}
            className="w-full bg-[#2563EB] text-white py-5 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Take Now
          </button>

          <button
            onClick={onNotifyDoctor}
            className="w-full bg-white text-gray-900 py-5 rounded-2xl text-lg font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Notify Doctor
          </button>
        </div>

        {/* Information Card */}
        <div className="bg-blue-50 rounded-2xl shadow-sm p-6 border border-blue-100">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            What is Prescription Drift?
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Prescription drift occurs when medication timing gradually shifts from 
            the prescribed schedule. This can reduce treatment effectiveness and 
            indicate emerging adherence challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
