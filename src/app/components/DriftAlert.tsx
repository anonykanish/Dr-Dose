import { ArrowLeft, AlertTriangle, TrendingDown, Pill, Phone } from 'lucide-react';

interface DriftAlertProps {
  onBack: () => void;
}

export function DriftAlert({ onBack }: DriftAlertProps) {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            Alert
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Main Alert Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-red-200">
          <div className="text-center">
            {/* Warning Icon */}
            <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-[#DC2626]" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Prescription Drift Detected
            </h2>

            {/* Details */}
            <div className="space-y-4 mb-6">
              <div className="bg-red-50 rounded-xl p-4">
                <div className="flex items-center justify-center mb-2">
                  <TrendingDown className="w-5 h-5 text-[#DC2626] mr-2" />
                  <span className="text-sm font-medium text-gray-900">
                    Adherence Quality Score
                  </span>
                </div>
                <p className="text-2xl font-bold text-[#DC2626]">
                  92 → 67
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-700">
                  Dose time shifting later each day
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
            <Pill className="w-5 h-5 mr-2" />
            Take Now
          </button>

          <button className="w-full bg-white text-gray-900 py-4 rounded-xl font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center">
            <Phone className="w-5 h-5 mr-2" />
            Notify Doctor
          </button>
        </div>

        {/* Information Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            What is Prescription Drift?
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Prescription drift occurs when medication timing gradually shifts from 
            the prescribed schedule. This can reduce treatment effectiveness and 
            indicate emerging adherence challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
