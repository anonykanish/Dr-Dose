import { ArrowLeft, Package, AlertTriangle, Clock } from 'lucide-react';

interface LowStockReorderProps {
  onBack: () => void;
  onReorder: () => void;
}

export function LowStockReorder({ onBack, onReorder }: LowStockReorderProps) {
  const remainingTablets = 2;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-orange-50 to-white px-6 py-5 border-b border-gray-100">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            Low Stock Alert
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 space-y-6">
        {/* Warning Card */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-lg p-8 border-2 border-orange-200">
          <div className="text-center">
            {/* Warning Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-orange-200 flex items-center justify-center shadow-sm">
                <AlertTriangle className="w-12 h-12 text-[#F97316]" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Low Stock Detected
            </h2>

            {/* Remaining Count */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
              <div className="flex items-center justify-center mb-2">
                <Package className="w-6 h-6 text-orange-600 mr-3" />
                <span className="text-sm font-medium text-gray-700">
                  Tablets Remaining
                </span>
              </div>
              <p className="text-5xl font-bold text-[#F97316]">
                {remainingTablets}
              </p>
            </div>

            <p className="text-base text-gray-600">
              You're running low on Metformin 500mg
            </p>
          </div>
        </div>

        {/* Reorder Button */}
        <button
          onClick={onReorder}
          className="w-full bg-[#F97316] text-white py-5 rounded-2xl text-lg font-semibold hover:bg-orange-600 transition-colors shadow-md"
        >
          Reorder Medicine
        </button>

        {/* Delivery Info Card */}
        <div className="bg-blue-50 rounded-2xl shadow-sm p-6 border border-blue-100">
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
              <Clock className="w-6 h-6 text-[#2563EB]" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Estimated Refill Time
              </h3>
              <p className="text-base text-gray-700">
                2 days standard delivery
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-2xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Automatic Reordering
          </h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Enable auto-reorder to never run out. We'll automatically place an order 
            when your supply reaches 5 tablets.
          </p>
          <button className="w-full bg-white text-gray-700 py-3 rounded-2xl text-base font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors">
            Enable Auto-Reorder
          </button>
        </div>
      </div>
    </div>
  );
}
