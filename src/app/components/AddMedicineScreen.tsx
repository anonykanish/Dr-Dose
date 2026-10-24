import { ArrowLeft, Pill, Clock, Package, Calendar } from 'lucide-react';
import { useState } from 'react';

interface AddMedicineScreenProps {
  onBack: () => void;
  onSave: () => void;
}

export function AddMedicineScreen({ onBack, onSave }: AddMedicineScreenProps) {
  const [medicineName, setMedicineName] = useState('');
  const [time, setTime] = useState('08:00');
  const [tabletCount, setTabletCount] = useState('30');
  const [duration, setDuration] = useState('30');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white px-6 py-5 border-b border-gray-100">
        <div className="flex items-center mb-2">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            Add New Medicine
          </h1>
        </div>
      </div>

      {/* Form Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Medicine Name */}
        <div>
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
            <Pill className="w-5 h-5 text-teal-600 mr-2" />
            Medicine Name
          </label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            placeholder="e.g., Metformin 500mg"
            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 text-base focus:border-[#2563EB] focus:outline-none transition-colors"
          />
        </div>

        {/* Time */}
        <div>
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
            <Clock className="w-5 h-5 text-blue-600 mr-2" />
            Scheduled Time
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 text-base focus:border-[#2563EB] focus:outline-none transition-colors"
          />
        </div>

        {/* Tablet Count */}
        <div>
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
            <Package className="w-5 h-5 text-green-600 mr-2" />
            Tablet Count
          </label>
          <input
            type="number"
            value={tabletCount}
            onChange={(e) => setTabletCount(e.target.value)}
            placeholder="30"
            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 text-base focus:border-[#2563EB] focus:outline-none transition-colors"
          />
        </div>

        {/* Duration (Optional) */}
        <div>
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
            <Calendar className="w-5 h-5 text-purple-600 mr-2" />
            Duration (Days) <span className="text-gray-400 ml-1">- Optional</span>
          </label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="30"
            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 text-base focus:border-[#2563EB] focus:outline-none transition-colors"
          />
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">Smart Dispensing Enabled:</span> Your medicine 
            will be dispensed automatically at the scheduled time.
          </p>
        </div>

        {/* Save Button */}
        <button
          onClick={onSave}
          className="w-full bg-[#2563EB] text-white py-5 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          Save Medicine
        </button>
      </div>
    </div>
  );
}
