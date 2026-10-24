import { User, Stethoscope } from 'lucide-react';

interface LoginScreenProps {
  onSelectRole: (role: 'patient' | 'doctor') => void;
}

export function LoginScreen({ onSelectRole }: LoginScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-[#F7FAFC]">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            MedX AI – Clinical Adherence Intelligence
          </h1>
          <p className="text-gray-600">
            Detecting Prescription Drift & Enabling Smart Dispensing
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="space-y-4">
          {/* Patient Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-[#2563EB]" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  Patient
                </h2>
                <p className="text-sm text-gray-600">
                  Track adherence and monitor prescription stability
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectRole('patient')}
              className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Continue as Patient
            </button>
          </div>

          {/* Doctor Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4">
                <Stethoscope className="w-6 h-6 text-[#2563EB]" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  Doctor
                </h2>
                <p className="text-sm text-gray-600">
                  Monitor patient drift and intervene early
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectRole('doctor')}
              className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Continue as Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}