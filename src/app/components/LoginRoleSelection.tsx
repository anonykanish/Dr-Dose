import { User, Stethoscope } from 'lucide-react';

interface LoginRoleSelectionProps {
  onSelectRole: (role: 'patient' | 'doctor') => void;
}

export function LoginRoleSelection({ onSelectRole }: LoginRoleSelectionProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-white">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            Dr. Dose AI
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Smart Dispensing & Clinical Adherence Intelligence
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="space-y-5">
          {/* Patient Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                <User className="w-7 h-7 text-[#2563EB]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Patient
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Track medicine intake, dispense doses, and monitor adherence.
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectRole('patient')}
              className="w-full bg-[#2563EB] text-white py-4 rounded-2xl text-base font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Continue as Patient
            </button>
          </div>

          {/* Doctor Card */}
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl shadow-md p-6 border border-teal-100 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-5">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                <Stethoscope className="w-7 h-7 text-teal-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Doctor
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Monitor patient adherence, detect prescription drift, and intervene early.
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectRole('doctor')}
              className="w-full bg-teal-600 text-white py-4 rounded-2xl text-base font-semibold hover:bg-teal-700 transition-colors shadow-sm"
            >
              Continue as Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
