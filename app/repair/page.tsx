import type { Metadata } from 'next';
import { RepairMaintenanceReference } from '../../components/RepairMaintenanceReference';

export const metadata: Metadata = {
  title: 'Repair & Maintenance | Garage Doors, Shutters & Gate Motors',
  description: 'Fault diagnosis and repair guidance for garage doors, rolling shutters, gate motors and parking barriers. Send photos or a short video to discuss the repair scope before a visit.',
  alternates: { canonical: '/repair/' },
};

export default function RepairPage() {
  return <RepairMaintenanceReference />;
}
