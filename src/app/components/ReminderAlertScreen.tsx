import { Bell, Pill, Clock } from 'lucide-react';

interface ReminderAlertScreenProps {
  onDispense: () => void;
  onSnooze: () => void;
}

export function ReminderAlertScreen({ onDispense, onSnooze }: ReminderAlertScreenProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Alert Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full bg-blue-50 border-4 border-blue-100 flex items-center justify-center">
            <Bell className="w-14 h-14 text-[#2563EB]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-3">
          Time to take your medicine
        </h1>

        {/* Medicine Info Card */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-6 mb-8 border border-blue-100">
          <div className="flex items-center justify-center mb-4">
            <Pill className="w-6 h-6 text-teal-600 mr-3" />
            <p className="text-xl font-semibold text-gray-900">
              Metformin 500mg
            </p>
          </div>

          <div className="flex items-center justify-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <p className="text-base">Scheduled: 8:00 AM</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={onDispense}
            className="w-full bg-[#2563EB] text-white py-5 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Dispense Now
          </button>

          <button
            onClick={onSnooze}
            className="w-full bg-gray-100 text-gray-700 py-5 rounded-2xl text-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Snooze (10 minutes)
          </button>
        </div>

        {/* Info Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Taking your medicine on time improves treatment effectiveness
        </p>
      </div>
    </div>
  );
}
