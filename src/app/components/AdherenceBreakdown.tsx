import { ArrowLeft, CheckCircle, Clock, XCircle, TrendingUp } from 'lucide-react';

interface AdherenceBreakdownProps {
  onBack: () => void;
}

export function AdherenceBreakdown({ onBack }: AdherenceBreakdownProps) {
  const onTimeDoses = 4;
  const delayedDoses = 2;
  const missedDoses = 1;
  const totalDoses = onTimeDoses + delayedDoses + missedDoses;
  const weeklyAdherence = Math.round(((onTimeDoses + delayedDoses) / totalDoses) * 100);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white px-6 py-5 border-b border-gray-100">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            Adherence Breakdown
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Weekly Adherence Card */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl shadow-lg p-8 border border-blue-100">
          <p className="text-center text-sm text-gray-600 mb-4">
            Weekly Adherence
          </p>
          
          <div className="flex justify-center mb-5">
            <div className="relative">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#E5E7EB"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#16A34A"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 70}`}
                  strokeDashoffset={`${2 * Math.PI * 70 * (1 - weeklyAdherence / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900">{weeklyAdherence}%</div>
                  <div className="text-sm text-gray-500">Adherence</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            <p className="text-sm text-gray-700 font-medium">
              Good progress this week
            </p>
          </div>
        </div>

        {/* Breakdown Cards */}
        <div className="space-y-4">
          {/* On-time Doses */}
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">On-time Doses</p>
                  <p className="text-2xl font-bold text-gray-900">{onTimeDoses}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-green-700">
                  {Math.round((onTimeDoses / totalDoses) * 100)}%
                </p>
              </div>
            </div>
          </div>

          {/* Delayed Doses */}
          <div className="bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-[#EAB308]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Delayed Doses</p>
                  <p className="text-2xl font-bold text-gray-900">{delayedDoses}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-yellow-700">
                  {Math.round((delayedDoses / totalDoses) * 100)}%
                </p>
              </div>
            </div>
          </div>

          {/* Missed Doses */}
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center mr-4">
                  <XCircle className="w-6 h-6 text-[#DC2626]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Missed Doses</p>
                  <p className="text-2xl font-bold text-gray-900">{missedDoses}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-red-700">
                  {Math.round((missedDoses / totalDoses) * 100)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Total Scheduled */}
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700 font-medium">
              Total Scheduled Doses
            </p>
            <p className="text-xl font-bold text-gray-900">{totalDoses}</p>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">Keep it up!</span> Consistent adherence 
            improves treatment effectiveness. Try to minimize delayed and missed doses for optimal results.
          </p>
        </div>
      </div>
    </div>
  );
}
