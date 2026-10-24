import { ArrowLeft, TrendingDown } from 'lucide-react';

interface AdherenceTimelineNewProps {
  onBack: () => void;
}

export function AdherenceTimelineNew({ onBack }: AdherenceTimelineNewProps) {
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
      <div className="bg-gradient-to-b from-blue-50 to-white px-6 py-5 border-b border-gray-100">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            Adherence Timeline
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Timeline Visualization */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-base font-semibold text-gray-900 mb-6">
            This Week
          </h2>

          {/* Timeline Circles */}
          <div className="flex justify-between mb-8">
            {weekData.map((day, index) => (
              <div key={day.day} className="flex flex-col items-center">
                {/* Day Circle */}
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-2 border-2 shadow-sm"
                    style={{
                      backgroundColor: day.status === 'missed' ? 'white' : day.color,
                      borderColor: day.color,
                    }}
                  >
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color: day.status === 'missed' ? day.color : 'white',
                      }}
                    >
                      {day.day.slice(0, 1)}
                    </span>
                  </div>
                  {/* Connection Line */}
                  {index < weekData.length - 1 && (
                    <div 
                      className="absolute top-7 left-14 w-8 h-0.5 bg-gray-200"
                      style={{ width: '20px' }}
                    ></div>
                  )}
                </div>
                {/* Date */}
                <span className="text-xs text-gray-500">{day.date}</span>
              </div>
            ))}
          </div>

          {/* Detailed Times */}
          <div className="space-y-3 pt-6 border-t border-gray-200">
            {weekData.map((day) => (
              <div key={day.day} className="flex justify-between items-center">
                <span className="text-base text-gray-700 font-medium">{day.day}</span>
                <span
                  className="text-base font-semibold"
                  style={{ color: day.color }}
                >
                  {day.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Insight Card */}
        <div className="bg-orange-50 rounded-3xl p-6 border-2 border-orange-200">
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mr-4 flex-shrink-0">
              <TrendingDown className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Pattern Detected
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Increasing delay pattern detected over the last 4 days.
              </p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-gray-50 rounded-3xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Status Guide
          </h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-[#16A34A] mr-3"></div>
              <span className="text-base text-gray-700">On-time (within 30 min)</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-[#EAB308] mr-3"></div>
              <span className="text-base text-gray-700">Slight delay (30 min - 2 hrs)</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-[#F97316] mr-3"></div>
              <span className="text-base text-gray-700">Major delay (&gt;2 hrs)</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full border-2 border-[#DC2626] mr-3"></div>
              <span className="text-base text-gray-700">Missed dose</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
