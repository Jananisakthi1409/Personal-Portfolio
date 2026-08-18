import React, { useState } from 'react';
import {
  MapPin,
  Compass,
  Database,
  Radio,
  AlertTriangle,
  ShieldCheck,
  Key,
  RefreshCw,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface SimulatorProps {
  projectId: string;
}

export const InteractiveProjectSimulator: React.FC<SimulatorProps> = ({ projectId }) => {
  // Simulator State for South Trails
  const [selectedDestination, setSelectedDestination] = useState(0);
  const destinations = [
    { name: 'Munnar & Wayanad', state: 'Kerala', type: 'Hill Stations & Tea Estates', price: '₹14,500', rating: '4.9/5' },
    { name: 'Hampi & Badami', state: 'Karnataka', type: 'Heritage & UNESCO Ruins', price: '₹12,200', rating: '4.8/5' },
    { name: 'Ooty & Nilgiris', state: 'Tamil Nadu', type: 'Mountain Railways & Valleys', price: '₹11,800', rating: '4.9/5' }
  ];

  // Simulator State for IoT Waste Collection
  const [anomalyTriggered, setAnomalyTriggered] = useState(false);
  const [fillLevel, setFillLevel] = useState(88);

  // Simulator State for Legal Case Management JWT
  const [selectedRole, setSelectedRole] = useState<'ROLE_ADMIN' | 'ROLE_LAWYER' | 'ROLE_CLIENT'>('ROLE_LAWYER');

  if (projectId === 'proj-1') {
    // South Trails Visual Interactive Mockup
    return (
      <div className="w-full h-full bg-[#faf8f5] rounded-2xl p-5 sm:p-6 border border-[#ede4db] text-[#1c1917] space-y-4 font-sans select-none shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-[#ede4db]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#fbf0ec] text-[#4a1521]">
              <Compass className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-[#1c1917] tracking-wide">
              SOUTH TRAILS // LIVE DISCOVERY UI
            </span>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#ffffff] text-[#4a1521] border border-[#e5c9c5] font-semibold">
            Supabase DB Connected
          </span>
        </div>

        {/* Destination Cards Tab */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono text-[#78716c]">
            Select Curated Region:
          </div>
          <div className="grid grid-cols-3 gap-2">
            {destinations.map((dest, i) => (
              <button
                key={dest.name}
                onClick={() => setSelectedDestination(i)}
                className={`p-2.5 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                  selectedDestination === i
                    ? 'bg-[#4a1521] border-[#4a1521] text-[#faf8f5] shadow-xs'
                    : 'bg-[#ffffff] border-[#ede4db] text-[#57534e] hover:text-[#1c1917] hover:border-[#b8686c]'
                }`}
              >
                <div className="font-bold truncate">{dest.name}</div>
                <div className={`text-[10px] ${selectedDestination === i ? 'text-[#fbf0ec]' : 'text-[#b8686c]'}`}>
                  {dest.state}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Package Details */}
        <div className="p-4 rounded-xl bg-[#ffffff] border border-[#ede4db] space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-[#1c1917] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#b8686c]" />
              {destinations[selectedDestination].name}
            </div>
            <div className="text-xs font-mono text-[#4a1521] font-bold">
              {destinations[selectedDestination].price}
            </div>
          </div>
          <p className="text-[11px] text-[#78716c]">
            {destinations[selectedDestination].type} • High-rated community package
          </p>
        </div>

        {/* Real-time Supabase Query Preview */}
        <div className="p-2.5 rounded-xl bg-[#ffffff] border border-[#ede4db] font-mono text-[10px] text-[#78716c] space-y-1">
          <div className="text-[#4a1521] font-bold flex items-center justify-between">
            <span>// RESTful Cloud Query</span>
            <span className="text-[#b8686c]">HTTP 200 OK</span>
          </div>
          <div className="text-[#292524]">
            supabase.from('destinations').select('*').eq('state', '{destinations[selectedDestination].state}')
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'proj-2') {
    // IoT Smart Waste Telemetry & Anomaly Detector Simulator
    return (
      <div className="w-full h-full bg-[#faf8f5] rounded-2xl p-5 sm:p-6 border border-[#ede4db] text-[#1c1917] space-y-4 font-sans select-none shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-[#ede4db]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#fbf0ec] text-[#4a1521]">
              <Radio className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-[#1c1917] tracking-wide">
              SMART BIN SENSOR STREAM // ML TELEMETRY
            </span>
          </div>
          <button
            onClick={() => {
              setAnomalyTriggered(!anomalyTriggered);
              setFillLevel(anomalyTriggered ? 45 : 94);
            }}
            className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-[#ffffff] hover:bg-[#fbf0ec] text-[#4a1521] border border-[#e5c9c5] flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <RefreshCw className="w-2.5 h-2.5" />
            <span>Simulate Sensor Feed</span>
          </button>
        </div>

        {/* Telemetry Sensor Gauges */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#ede4db] space-y-1.5">
            <div className="text-[10px] font-mono text-[#78716c]">Bin #104 Fill Status</div>
            <div className={`text-base font-bold ${fillLevel > 80 ? 'text-[#4a1521]' : 'text-[#2e7d32]'}`}>
              {fillLevel}% Fill Capacity
            </div>
            <div className="w-full bg-[#ede4db] h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full ${fillLevel > 80 ? 'bg-[#4a1521]' : 'bg-[#2e7d32]'}`}
                style={{ width: `${fillLevel}%` }}
              />
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#ede4db] space-y-1.5">
            <div className="text-[10px] font-mono text-[#78716c]">Anomaly Classifier</div>
            <div className="text-sm font-bold text-[#1c1917] flex items-center gap-1.5">
              {fillLevel > 80 ? (
                <>
                  <AlertTriangle className="w-4 h-4 text-[#b8686c]" />
                  <span className="text-[#b8686c]">High Route Alert</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#2e7d32]" />
                  <span className="text-[#2e7d32]">Optimal Bounds</span>
                </>
              )}
            </div>
            <div className="text-[10px] text-[#78716c]">Python ML Model Output</div>
          </div>
        </div>

        {/* Predictive Dispatch Logic Output */}
        <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#ede4db] space-y-1 font-mono text-[11px]">
          <div className="text-[#4a1521] font-bold flex items-center justify-between">
            <span>[DATA INSIGHTS]</span>
            <span className="text-[10px] text-[#78716c]">Telemetry Active</span>
          </div>
          <p className="text-[#44403c] text-xs font-sans">
            {fillLevel > 80
              ? 'Predictive threshold exceeded: Dynamically prioritizing municipal waste collection route to conserve vehicle fuel.'
              : 'Waste container fill levels within normal baseline. Scheduled route remains unchanged.'}
          </p>
        </div>
      </div>
    );
  }

  // Legal Case Management System (Spring Boot + JWT + MySQL)
  return (
    <div className="w-full h-full bg-[#faf8f5] rounded-2xl p-5 sm:p-6 border border-[#ede4db] text-[#1c1917] space-y-4 font-sans select-none shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-[#ede4db]">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-[#fbf0ec] text-[#4a1521]">
            <ShieldCheck className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold text-[#1c1917] tracking-wide">
            SPRING BOOT JWT & RBAC ACCESS ENGINE
          </span>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#ffffff] text-[#4a1521] border border-[#e5c9c5] font-semibold">
          Java Backend
        </span>
      </div>

      {/* Role Switcher */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono text-[#78716c]">
          Test Role-Based Authorization Tier:
        </div>
        <div className="grid grid-cols-3 gap-2">
          {(['ROLE_ADMIN', 'ROLE_LAWYER', 'ROLE_CLIENT'] as const).map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`p-2 rounded-xl text-center border font-mono text-[11px] transition-all cursor-pointer ${
                selectedRole === role
                  ? 'bg-[#4a1521] border-[#4a1521] text-[#faf8f5] font-bold'
                  : 'bg-[#ffffff] border-[#ede4db] text-[#57534e] hover:text-[#1c1917] hover:border-[#b8686c]'
              }`}
            >
              {role.replace('ROLE_', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Decoded JWT Payload Simulator */}
      <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#ede4db] space-y-1.5 font-mono text-[11px]">
        <div className="text-[#78716c] flex items-center justify-between">
          <span>// Decoded JWT Claims</span>
          <span className="text-[#2e7d32] font-semibold">Signature Valid</span>
        </div>
        <div className="text-[#292524]">
          {'{'} <span className="text-[#4a1521]">"sub"</span>: "advocate@legalcorp.in", <span className="text-[#4a1521]">"authority"</span>: "{selectedRole}", <span className="text-[#4a1521]">"database"</span>: "MySQL" {'}'}
        </div>
      </div>

      {/* REST API Authorization Outcome */}
      <div className="p-3 rounded-xl bg-[#ffffff] border border-[#ede4db] text-xs space-y-1">
        <div className="font-bold text-[#1c1917] flex items-center gap-1.5">
          <Key className="w-3.5 h-3.5 text-[#b8686c]" />
          <span>Access Tier: {selectedRole}</span>
        </div>
        <p className="text-[11px] text-[#78716c]">
          {selectedRole === 'ROLE_ADMIN' &&
            'Full privileges: User administration, case dossier auditing, and secure document management.'}
          {selectedRole === 'ROLE_LAWYER' &&
            'Advocate privileges: Case tracking, evidentiary submission, and hearings scheduler.'}
          {selectedRole === 'ROLE_CLIENT' &&
            'Client privileges: Read-only dossier status and verified hearing notices.'}
        </p>
      </div>
    </div>
  );
};
