import { ArrowLeft, Clock, Calendar, TrendingDown, Package, AlertTriangle } from 'lucide-react';

interface PatientDashboardProps {
  onBack: () => void;
  onViewTimeline: () => void;
}

export function PatientDashboard({ onBack, onViewTimeline }: PatientDashboardProps) {
  const stockLevel = 4; // tablets remaining
  const maxStock = 30;
  const isLowStock = stockLevel <= 2;
  const stockPercentage = (stockLevel / maxStock) * 100;

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            My Dashboard
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

        {/* AQS Score Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <p className="text-sm text-gray-600 mb-3 text-center">
            Adherence Quality Score
          </p>
          
          {/* Score Display */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full border-8 border-yellow-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">82</div>
                  <div className="text-xs text-gray-500">/ 100</div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Label */}
          <div className="flex items-center justify-center mb-4">
            <TrendingDown className="w-4 h-4 text-yellow-600 mr-2" />
            <p className="text-sm text-gray-700">
              Stable but trending downward
            </p>
          </div>

          {/* View Timeline Button */}
          <button
            onClick={onViewTimeline}
            className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            View Adherence Timeline
          </button>
        </div>

        {/* Dispense Medicine Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Dispense Medicine
          </h3>
          
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
              <Package className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">
                Connected Smart Dock Ready
              </p>
              <p className="text-xs text-gray-500">
                Device online and operational
              </p>
            </div>
          </div>

          <button className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
            Dispense Now
          </button>
        </div>

        {/* Stock Level Card */}
        <div className={`rounded-2xl shadow-sm p-6 border-2 ${
          isLowStock 
            ? 'bg-red-50 border-red-200' 
            : 'bg-white border-gray-100'
        }`}>
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Stock Level
          </h3>

          {/* Stock Information */}
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-2xl font-bold text-gray-900">
                {stockLevel}
              </span>
              <span className="text-sm text-gray-600">
                tablets remaining
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${stockPercentage}%`,
                  backgroundColor: isLowStock ? '#DC2626' : stockLevel <= 10 ? '#F97316' : '#16A34A',
                }}
              ></div>
            </div>
          </div>

          {/* Low Stock Warning */}
          {isLowStock && (
            <div className="flex items-start mb-4 p-3 bg-white rounded-lg border border-red-200">
              <AlertTriangle className="w-5 h-5 text-[#DC2626] mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-[#DC2626]">Low Stock Detected</span>
                <br />
                Refill Recommended
              </p>
            </div>
          )}

          {/* Request Refill Button */}
          <button className={`w-full py-3 rounded-xl font-medium transition-colors ${
            isLowStock
              ? 'bg-[#DC2626] text-white hover:bg-red-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}>
            Request Refill
          </button>
        </div>
      </div>
    </div>
  );
}
