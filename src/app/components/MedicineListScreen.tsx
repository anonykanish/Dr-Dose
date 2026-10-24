import { ArrowLeft, Pill, Clock, Calendar } from 'lucide-react';

interface MedicineListScreenProps {
  onBack: () => void;
}

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  time: string;
  frequency: string;
  duration: string;
  color: string;
}

export function MedicineListScreen({ onBack }: MedicineListScreenProps) {
  const medicines: Medicine[] = [
    {
      id: '1',
      name: 'Metformin',
      dosage: '500mg',
      time: '8:00 AM',
      frequency: 'Daily',
      duration: '30 Days',
      color: 'teal',
    },
    {
      id: '2',
      name: 'Lisinopril',
      dosage: '10mg',
      time: '9:00 AM',
      frequency: 'Daily',
      duration: '30 Days',
      color: 'blue',
    },
    {
      id: '3',
      name: 'Atorvastatin',
      dosage: '20mg',
      time: '8:00 PM',
      frequency: 'Daily',
      duration: '30 Days',
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string }> = {
      teal: { bg: 'bg-teal-50', border: 'border-teal-100', icon: 'text-teal-600' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-100', icon: 'text-blue-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-100', icon: 'text-purple-600' },
    };
    return colors[color] || colors.teal;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-teal-50 to-white px-6 py-5 border-b border-gray-100">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              My Medicines
            </h1>
            <p className="text-sm text-gray-600">Active prescriptions</p>
          </div>
        </div>
      </div>

      {/* Medicine List */}
      <div className="px-6 py-6 space-y-4">
        {medicines.map((medicine) => {
          const colors = getColorClasses(medicine.color);
          return (
            <div
              key={medicine.id}
              className={`${colors.bg} rounded-3xl shadow-sm p-6 border ${colors.border}`}
            >
              {/* Medicine Header */}
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mr-4 shadow-sm">
                  <Pill className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {medicine.name}
                  </h3>
                  <p className="text-sm text-gray-600">{medicine.dosage}</p>
                </div>
              </div>

              {/* Medicine Details */}
              <div className="space-y-3 bg-white rounded-2xl p-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <span className="text-sm font-medium">{medicine.time}</span>
                    <span className="text-sm text-gray-500 ml-2">• {medicine.frequency}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-sm">{medicine.duration}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Card */}
      <div className="px-6 pb-6">
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">Smart Dispensing Active:</span> All 
            medicines will be dispensed automatically at their scheduled times.
          </p>
        </div>
      </div>
    </div>
  );
}
