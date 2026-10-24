import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface DoctorDashboardNewProps {
  onBack: () => void;
  onSelectPatient: (patientId: string) => void;
}

type RiskLevel = 'stable' | 'moderate' | 'high' | 'all';

interface Patient {
  id: string;
  name: string;
  aqs: number;
  riskLevel: 'stable' | 'moderate' | 'high';
  medication: string;
}

export function DoctorDashboardNew({ onBack, onSelectPatient }: DoctorDashboardNewProps) {
  const [activeFilter, setActiveFilter] = useState<RiskLevel>('all');

  const patients: Patient[] = [
    { id: '1', name: 'Sarah Mitchell', aqs: 94, riskLevel: 'stable', medication: 'Metformin 500mg' },
    { id: '2', name: 'Robert Chen', aqs: 88, riskLevel: 'stable', medication: 'Lisinopril 10mg' },
    { id: '3', name: 'Maria Garcia', aqs: 72, riskLevel: 'moderate', medication: 'Atorvastatin 20mg' },
    { id: '4', name: 'James Anderson', aqs: 68, riskLevel: 'moderate', medication: 'Metformin 500mg' },
    { id: '5', name: 'Linda Thompson', aqs: 51, riskLevel: 'high', medication: 'Levothyroxine 50mcg' },
    { id: '6', name: 'David Martinez', aqs: 45, riskLevel: 'high', medication: 'Amlodipine 5mg' },
    { id: '7', name: 'Patricia Wilson', aqs: 91, riskLevel: 'stable', medication: 'Omeprazole 20mg' },
    { id: '8', name: 'Michael Brown', aqs: 76, riskLevel: 'moderate', medication: 'Sertraline 50mg' },
  ];

  const filteredPatients = activeFilter === 'all' 
    ? patients 
    : patients.filter(p => p.riskLevel === activeFilter);

  const getRiskColor = (level: 'stable' | 'moderate' | 'high') => {
    switch (level) {
      case 'stable':
        return '#16A34A';
      case 'moderate':
        return '#EAB308';
      case 'high':
        return '#DC2626';
    }
  };

  const getRiskLabel = (level: 'stable' | 'moderate' | 'high') => {
    switch (level) {
      case 'stable':
        return 'Stable';
      case 'moderate':
        return 'Moderate Drift';
      case 'high':
        return 'High Risk';
    }
  };

  const getRiskBgColor = (level: 'stable' | 'moderate' | 'high') => {
    switch (level) {
      case 'stable':
        return 'bg-green-50';
      case 'moderate':
        return 'bg-yellow-50';
      case 'high':
        return 'bg-red-50';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-teal-50 to-white px-6 py-5 border-b border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center">
            <button onClick={onBack} className="mr-4">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              Doctor Dashboard
            </h1>
          </div>
        </div>
        <p className="text-sm text-gray-600 ml-10">
          Patient Monitoring
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex space-x-2 overflow-x-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === 'all'
                ? 'bg-[#2563EB] text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({patients.length})
          </button>
          <button
            onClick={() => setActiveFilter('stable')}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === 'stable'
                ? 'bg-[#16A34A] text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Stable ({patients.filter(p => p.riskLevel === 'stable').length})
          </button>
          <button
            onClick={() => setActiveFilter('moderate')}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === 'moderate'
                ? 'bg-[#EAB308] text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Moderate ({patients.filter(p => p.riskLevel === 'moderate').length})
          </button>
          <button
            onClick={() => setActiveFilter('high')}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === 'high'
                ? 'bg-[#DC2626] text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            High Risk ({patients.filter(p => p.riskLevel === 'high').length})
          </button>
        </div>
      </div>

      {/* Summary Card */}
      <div className="px-6 pt-4">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-sm p-5 border border-blue-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-600 mb-1">Total Patients</p>
              <p className="text-2xl font-bold text-gray-900">{patients.length}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Stable</p>
              <p className="text-2xl font-bold text-[#16A34A]">{patients.filter(p => p.riskLevel === 'stable').length}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Moderate Drift</p>
              <p className="text-2xl font-bold text-[#EAB308]">{patients.filter(p => p.riskLevel === 'moderate').length}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">High Risk</p>
              <p className="text-2xl font-bold text-[#DC2626]">{patients.filter(p => p.riskLevel === 'high').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Patient List */}
      <div className="px-6 py-4 space-y-3 pb-24">
        {filteredPatients.map((patient) => (
          <button
            key={patient.id}
            onClick={() => onSelectPatient(patient.id)}
            className="w-full bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-all text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <h3 className="text-base font-semibold text-gray-900 mr-3">
                    {patient.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskBgColor(patient.riskLevel)}`}
                    style={{ color: getRiskColor(patient.riskLevel) }}
                  >
                    {getRiskLabel(patient.riskLevel)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {patient.medication}
                </p>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-3">AQS:</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2.5 bg-gray-200 rounded-full mr-3 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${patient.aqs}%`,
                          backgroundColor: getRiskColor(patient.riskLevel),
                        }}
                      ></div>
                    </div>
                    <span
                      className="text-base font-bold"
                      style={{ color: getRiskColor(patient.riskLevel) }}
                    >
                      {patient.aqs}
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
            </div>
          </button>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
        <div className="max-w-md mx-auto flex justify-between text-sm">
          <span className="text-gray-600">Viewing Patients</span>
          <span className="font-semibold text-gray-900">{filteredPatients.length} of {patients.length}</span>
        </div>
      </div>
    </div>
  );
}