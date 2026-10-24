import { ArrowLeft, TrendingDown, AlertTriangle } from 'lucide-react';

interface DoctorPatientDetailProps {
  onBack: () => void;
  patientId: string;
}

export function DoctorPatientDetail({ onBack, patientId }: DoctorPatientDetailProps) {
  // Mock patient data - in real app would fetch based on patientId
  const patient = {
    name: 'Maria Garcia',
    medication: 'Atorvastatin 20mg',
    aqs: 72,
    riskLevel: 'moderate' as const,
    hasDrift: true,
  };

  const weekData = [
    { day: 'Mon', date: '2/10', status: 'on-time', time: '8:02 AM', color: '#16A34A' },
    { day: 'Tue', date: '2/11', status: 'on-time', time: '8:15 AM', color: '#16A34A' },
    { day: 'Wed', date: '2/12', status: 'slight-delay', time: '9:30 AM', color: '#EAB308' },
    { day: 'Thu', date: '2/13', status: 'slight-delay', time: '10:15 AM', color: '#EAB308' },
    { day: 'Fri', date: '2/14', status: 'major-delay', time: '1:45 PM', color: '#F97316' },
    { day: 'Sat', date: '2/15', status: 'major-delay', time: '2:30 PM', color: '#F97316' },
    { day: 'Sun', date: '2/16', status: 'missed', time: 'Missed', color: '#DC2626' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-teal-50 to-white px-6 py-5 border-b border-gray-100">
        <div className="flex items-center mb-2">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              {patient.name}
            </h1>
            <p className="text-sm text-gray-600">{patient.medication}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* AQS Score Card */}
        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl shadow-md p-6 border border-yellow-100">
          <p className="text-center text-sm text-gray-600 mb-4">
            Adherence Quality Score
          </p>
          
          <div className="flex justify-center mb-4">
            <div className="relative">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#E5E7EB"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#EAB308"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - patient.aqs / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">{patient.aqs}</div>
                  <div className="text-xs text-gray-500">/ 100</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
              Moderate Drift Detected
            </span>
          </div>
        </div>

        {/* Drift Alert if applicable */}
        {patient.hasDrift && (
          <div className="bg-orange-50 rounded-3xl p-6 border-2 border-orange-200">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Prescription Drift Alert
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Dose timing shifting later each day. Intervention may be needed.
                </p>
                <button className="px-4 py-2 bg-[#2563EB] text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Contact Patient
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Weekly Timeline */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-base font-semibold text-gray-900 mb-6">
            Weekly Adherence Pattern
          </h2>

          {/* Timeline Circles */}
          <div className="flex justify-between mb-8">
            {weekData.map((day) => (
              <div key={day.day} className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-2 border-2 shadow-sm"
                  style={{
                    backgroundColor: day.status === 'missed' ? 'white' : day.color,
                    borderColor: day.color,
                  }}
                >
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: day.status === 'missed' ? day.color : 'white',
                    }}
                  >
                    {day.day.slice(0, 1)}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{day.date}</span>
              </div>
            ))}
          </div>

          {/* Detailed Times */}
          <div className="space-y-2 pt-4 border-t border-gray-200">
            {weekData.map((day) => (
              <div key={day.day} className="flex justify-between items-center">
                <span className="text-sm text-gray-700 font-medium">{day.day}</span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: day.color }}
                >
                  {day.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Insight */}
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <div className="flex items-start">
            <TrendingDown className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">Pattern Analysis:</span> Increasing 
              delay pattern detected over the last 4 days. Consider patient outreach.
            </p>
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Activity Log
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#16A34A] mt-2 mr-3 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Dose Taken</p>
                <p className="text-xs text-gray-500">Today, 8:02 AM</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#EAB308] mt-2 mr-3 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Delayed Dose</p>
                <p className="text-xs text-gray-500">Yesterday, 9:15 AM</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 mr-3 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Drift Alert Triggered</p>
                <p className="text-xs text-gray-500">2 days ago, 10:30 AM</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#16A34A] mt-2 mr-3 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Dose Taken</p>
                <p className="text-xs text-gray-500">3 days ago, 8:05 AM</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 mr-3 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Missed Dose</p>
                <p className="text-xs text-gray-500">4 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}