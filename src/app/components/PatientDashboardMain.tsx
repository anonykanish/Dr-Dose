import { Clock, Pill, Package, TrendingDown, Plus } from 'lucide-react';
import { useState } from 'react';

interface PatientDashboardMainProps {
  onDispense: () => void;
  onViewTimeline: () => void;
  onAddMedicine: () => void;
  onViewMedicines: () => void;
  onViewAQSBreakdown: () => void;
  tabletCount: number;
}

export function PatientDashboardMain({ onDispense, onViewTimeline, onAddMedicine, onViewMedicines, onViewAQSBreakdown, tabletCount }: PatientDashboardMainProps) {
  const [isDeviceOnline] = useState(true);
  const maxStock = 30;
  const isLowStock = tabletCount <= 2;
  const stockPercentage = (tabletCount / maxStock) * 100;
  const aqs = 82;
  const daysUntilRefill = Math.ceil(tabletCount / 1); // 1 tablet per day

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white px-6 pt-8 pb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Dr. Dose AI
        </h1>
        <p className="text-sm text-gray-600 mb-3">
          Smart Dispensing & Adherence Intelligence
        </p>
        
        {/* Device Status Indicator */}
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${isDeviceOnline ? 'bg-[#16A34A]' : 'bg-[#DC2626]'}`}></div>
          <span className={`text-xs font-medium ${isDeviceOnline ? 'text-green-700' : 'text-red-700'}`}>
            {isDeviceOnline ? 'Smart Dock Connected' : 'Device Offline'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 space-y-4">
        {/* Quick Info Cards Grid */}
        <div className="grid grid-cols-3 gap-3">
          {/* Next Medicine Time */}
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <Clock className="w-6 h-6 text-[#2563EB] mb-2" />
            <p className="text-xs text-gray-600 mb-1">Next Dose</p>
            <p className="text-base font-semibold text-gray-900">8:00 AM</p>
            <p className="text-xs text-gray-500">Today</p>
          </div>

          {/* Medicine Name */}
          <div 
            onClick={onViewMedicines}
            className="bg-teal-50 rounded-2xl p-4 border border-teal-100 cursor-pointer hover:bg-teal-100 transition-colors active:scale-95"
          >
            <Pill className="w-6 h-6 text-teal-600 mb-2" />
            <p className="text-xs text-gray-600 mb-1">Medicine</p>
            <p className="text-sm font-semibold text-gray-900 leading-tight">Metformin</p>
            <p className="text-xs text-gray-500">500mg</p>
          </div>

          {/* Tablets Left */}
          <div className={`rounded-2xl p-4 border ${
            isLowStock 
              ? 'bg-red-50 border-red-200' 
              : 'bg-green-50 border-green-100'
          }`}>
            <Package className={`w-6 h-6 mb-2 ${
              isLowStock ? 'text-[#DC2626]' : 'text-[#16A34A]'
            }`} />
            <p className="text-xs text-gray-600 mb-1">Stock</p>
            <p className="text-base font-semibold text-gray-900">{tabletCount}</p>
            <p className="text-xs text-gray-500">tablets</p>
            <p className="text-xs text-gray-500 mt-1">
              Refill in {daysUntilRefill} day{daysUntilRefill !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Stock Progress Card */}
        {isLowStock && (
          <div className="bg-red-50 rounded-2xl p-5 border border-red-200">
            <div className="flex items-start mb-3">
              <Package className="w-5 h-5 text-[#DC2626] mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Low Stock
                </p>
                <p className="text-sm text-gray-700">
                  Refill Recommended
                </p>
              </div>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-[#DC2626]"
                style={{ width: `${stockPercentage}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* AQS Score Card - Large and Prominent */}
        <div 
          onClick={onViewAQSBreakdown}
          className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl shadow-lg p-8 border border-blue-100 cursor-pointer hover:shadow-xl transition-shadow active:scale-[0.99]"
        >
          <p className="text-center text-sm text-gray-600 mb-4">
            Adherence Quality Score
          </p>
          
          {/* Large Score Circle */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <svg className="w-40 h-40 transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#E5E7EB"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Progress circle */}
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#EAB308"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 70}`}
                  strokeDashoffset={`${2 * Math.PI * 70 * (1 - aqs / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900">{aqs}</div>
                  <div className="text-sm text-gray-500">/ 100</div>
                </div>
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

          {/* View Timeline Button */}
          <button
            onClick={onViewTimeline}
            className="w-full bg-white text-gray-700 py-3 rounded-2xl text-base font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            View Adherence Timeline
          </button>
        </div>

        {/* Primary Action - Dispense Medicine */}
        <button
          onClick={onDispense}
          className="w-full bg-[#2563EB] text-white py-5 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          Dispense Medicine
        </button>

        {/* Add Medicine Button */}
        <button
          onClick={onAddMedicine}
          className="w-full bg-teal-50 text-teal-700 py-4 rounded-2xl text-base font-medium hover:bg-teal-100 transition-colors border border-teal-200 flex items-center justify-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Medicine
        </button>
      </div>
    </div>
  );
}