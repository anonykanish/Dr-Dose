import { ArrowLeft, Clock, Calendar, TrendingDown } from 'lucide-react';

interface PatientOverviewProps {
  onBack: () => void;
  onViewTimeline: () => void;
}

export function PatientOverview({ onBack, onViewTimeline }: PatientOverviewProps) {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            My Prescription
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-4">
        {/* Prescription Info Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Metformin 500mg
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-center text-gray-700">
              <Clock className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-sm">8:00 AM – Daily</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Calendar className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-sm">30 Days</span>
            </div>
          </div>
        </div>

        {/* AQS Score Card - Visual Focus */}
        <div className="bg-white rounded-2xl shadow-md p-8 border-2 border-gray-100">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Adherence Quality Score
            </p>
            
            {/* Large Score Display */}
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 rounded-full border-8 border-yellow-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">82</div>
                  <div className="text-sm text-gray-500">/ 100</div>
                </div>
              </div>
            </div>

            {/* Status Label */}
            <div className="flex items-center justify-center mb-6">
              <TrendingDown className="w-5 h-5 text-yellow-600 mr-2" />
              <p className="text-sm text-gray-700 font-medium">
                Stable but trending downward
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={onViewTimeline}
              className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              View Adherence Timeline
            </button>
          </div>
        </div>

        {/* Info Text */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <p className="text-sm text-gray-700">
            Your adherence score reflects consistency in taking medication on time. 
            Higher scores indicate better prescription stability.
          </p>
        </div>
      </div>
    </div>
  );
}
