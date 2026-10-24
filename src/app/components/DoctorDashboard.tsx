import { ArrowLeft, Filter, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface DoctorDashboardProps {
  onBack: () => void;
}

type RiskLevel = 'stable' | 'moderate' | 'high' | 'all';

interface Patient {
  id: string;
  name: string;
  aqs: number;
  riskLevel: 'stable' | 'moderate' | 'high';
  medication: string;
}

export function DoctorDashboard({ onBack }: DoctorDashboardProps) {
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
    <div className="min-h-screen bg-[#F7FAFC]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={onBack} className="mr-4">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">
              Patient Monitoring
            </h1>
          </div>
          <Filter className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex space-x-2 overflow-x-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'all'
                ? 'bg-[#2563EB] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({patients.length})
          </button>
          <button
            onClick={() => setActiveFilter('stable')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'stable'
                ? 'bg-[#16A34A] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Stable ({patients.filter(p => p.riskLevel === 'stable').length})
          </button>
          <button
            onClick={() => setActiveFilter('moderate')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'moderate'
                ? 'bg-[#EAB308] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Moderate ({patients.filter(p => p.riskLevel === 'moderate').length})
          </button>
          <button
            onClick={() => setActiveFilter('high')}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'high'
                ? 'bg-[#DC2626] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            High Risk ({patients.filter(p => p.riskLevel === 'high').length})
          </button>
        </div>
      </div>

      {/* Patient List */}
      <div className="px-6 py-4 space-y-3">
        {filteredPatients.map((patient) => (
          <div
            key={patient.id}
            className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="font-semibold text-gray-900 mr-3">
                    {patient.name}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskBgColor(patient.riskLevel)}`}
                    style={{ color: getRiskColor(patient.riskLevel) }}
                  >
                    {getRiskLabel(patient.riskLevel)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {patient.medication}
                </p>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">AQS:</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${patient.aqs}%`,
                          backgroundColor: getRiskColor(patient.riskLevel),
                        }}
                      ></div>
                    </div>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: getRiskColor(patient.riskLevel) }}
                    >
                      {patient.aqs}
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total Patients</span>
          <span className="font-semibold text-gray-900">{filteredPatients.length}</span>
        </div>
      </div>
    </div>
  );
}
