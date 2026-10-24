import { useState } from 'react';
import { LoginRoleSelection } from './components/LoginRoleSelection';
import { PatientDashboardMain } from './components/PatientDashboardMain';
import { AddMedicineScreen } from './components/AddMedicineScreen';
import { ReminderAlertScreen } from './components/ReminderAlertScreen';
import { DispensingConfirmation } from './components/DispensingConfirmation';
import { AdherenceTimelineNew } from './components/AdherenceTimelineNew';
import { DriftAlertNew } from './components/DriftAlertNew';
import { LowStockReorder } from './components/LowStockReorder';
import { DoctorDashboardNew } from './components/DoctorDashboardNew';
import { DoctorPatientDetail } from './components/DoctorPatientDetail';
import { MedicineListScreen } from './components/MedicineListScreen';
import { AdherenceBreakdown } from './components/AdherenceBreakdown';

type Screen = 'login' | 'dashboard' | 'add-medicine' | 'reminder' | 'dispensing' | 'timeline' | 'drift-alert' | 'reorder' | 'doctor-dashboard' | 'doctor-patient-detail' | 'medicine-list' | 'aqs-breakdown';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [selectedPatientId, setSelectedPatientId] = useState<string>('');
  const [tabletCount, setTabletCount] = useState<number>(4);

  const handleSelectRole = (role: 'patient' | 'doctor') => {
    if (role === 'patient') {
      setCurrentScreen('dashboard');
    } else {
      setCurrentScreen('doctor-dashboard');
    }
  };

  const handleSelectPatient = (patientId: string) => {
    setSelectedPatientId(patientId);
    setCurrentScreen('doctor-patient-detail');
  };

  const handleDispense = () => {
    setTabletCount(prev => Math.max(0, prev - 1));
    setCurrentScreen('dispensing');
  };

  return (
    <div className="size-full bg-[#F7FAFC]">
      {/* Mobile Frame Container */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
          {currentScreen === 'login' && (
            <LoginRoleSelection onSelectRole={handleSelectRole} />
          )}

          {currentScreen === 'dashboard' && (
            <PatientDashboardMain
              onDispense={handleDispense}
              onViewTimeline={() => setCurrentScreen('timeline')}
              onAddMedicine={() => setCurrentScreen('add-medicine')}
              onViewMedicines={() => setCurrentScreen('medicine-list')}
              onViewAQSBreakdown={() => setCurrentScreen('aqs-breakdown')}
              tabletCount={tabletCount}
            />
          )}
          
          {currentScreen === 'medicine-list' && (
            <MedicineListScreen
              onBack={() => setCurrentScreen('dashboard')}
            />
          )}
          
          {currentScreen === 'aqs-breakdown' && (
            <AdherenceBreakdown
              onBack={() => setCurrentScreen('dashboard')}
            />
          )}
          
          {currentScreen === 'add-medicine' && (
            <AddMedicineScreen
              onBack={() => setCurrentScreen('dashboard')}
              onSave={() => setCurrentScreen('dashboard')}
            />
          )}
          
          {currentScreen === 'reminder' && (
            <ReminderAlertScreen
              onDispense={handleDispense}
              onSnooze={() => setCurrentScreen('dashboard')}
            />
          )}
          
          {currentScreen === 'dispensing' && (
            <DispensingConfirmation
              onContinue={() => setCurrentScreen('dashboard')}
              onReorder={() => setCurrentScreen('reorder')}
              remainingTablets={tabletCount}
            />
          )}
          
          {currentScreen === 'timeline' && (
            <AdherenceTimelineNew
              onBack={() => setCurrentScreen('dashboard')}
            />
          )}
          
          {currentScreen === 'drift-alert' && (
            <DriftAlertNew
              onBack={() => setCurrentScreen('timeline')}
              onTakeNow={handleDispense}
              onNotifyDoctor={() => setCurrentScreen('dashboard')}
            />
          )}
          
          {currentScreen === 'reorder' && (
            <LowStockReorder
              onBack={() => setCurrentScreen('dashboard')}
              onReorder={() => setCurrentScreen('dashboard')}
            />
          )}

          {currentScreen === 'doctor-dashboard' && (
            <DoctorDashboardNew
              onBack={() => setCurrentScreen('login')}
              onSelectPatient={handleSelectPatient}
            />
          )}

          {currentScreen === 'doctor-patient-detail' && (
            <DoctorPatientDetail
              onBack={() => setCurrentScreen('doctor-dashboard')}
              patientId={selectedPatientId}
            />
          )}
        </div>
      </div>

      {/* Navigation Helper - For Demo Purposes */}
      <div className="fixed bottom-4 left-4 bg-white rounded-xl shadow-lg p-4 max-w-xs border border-gray-200">
        <p className="text-xs text-gray-600 mb-3 font-semibold">Navigate Screens</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setCurrentScreen('login')}
            className="px-3 py-2 text-xs bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg font-medium"
          >
            Login
          </button>
          <button
            onClick={() => setCurrentScreen('dashboard')}
            className="px-3 py-2 text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg font-medium"
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentScreen('medicine-list')}
            className="px-3 py-2 text-xs bg-teal-50 text-teal-700 hover:bg-teal-100 rounded-lg font-medium"
          >
            Medicines
          </button>
          <button
            onClick={() => setCurrentScreen('aqs-breakdown')}
            className="px-3 py-2 text-xs bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-lg font-medium"
          >
            AQS Detail
          </button>
          <button
            onClick={() => setCurrentScreen('add-medicine')}
            className="px-3 py-2 text-xs bg-teal-50 text-teal-700 hover:bg-teal-100 rounded-lg font-medium"
          >
            Add Medicine
          </button>
          <button
            onClick={() => setCurrentScreen('reminder')}
            className="px-3 py-2 text-xs bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg font-medium"
          >
            Reminder
          </button>
          <button
            onClick={() => setCurrentScreen('dispensing')}
            className="px-3 py-2 text-xs bg-green-50 text-green-700 hover:bg-green-100 rounded-lg font-medium"
          >
            Dispensed
          </button>
          <button
            onClick={() => setCurrentScreen('timeline')}
            className="px-3 py-2 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg font-medium"
          >
            Timeline
          </button>
          <button
            onClick={() => setCurrentScreen('drift-alert')}
            className="px-3 py-2 text-xs bg-red-50 text-red-700 hover:bg-red-100 rounded-lg font-medium"
          >
            Drift Alert
          </button>
          <button
            onClick={() => setCurrentScreen('reorder')}
            className="px-3 py-2 text-xs bg-orange-50 text-orange-700 hover:bg-orange-100 rounded-lg font-medium"
          >
            Reorder
          </button>
          <button
            onClick={() => setCurrentScreen('doctor-dashboard')}
            className="px-3 py-2 text-xs bg-teal-50 text-teal-700 hover:bg-teal-100 rounded-lg font-medium col-span-2"
          >
            Doctor Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}