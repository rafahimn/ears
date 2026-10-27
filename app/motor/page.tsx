import type { Metadata } from 'next';
import { GateMotorReference } from '../../components/GateMotorReference';

export const metadata: Metadata = {
  title: 'Gate Motors & Access Automation',
  description: 'Sliding and swing gate motors, garage door operators, parking barriers, remotes, photocells and access-control options across Dubai and the UAE.',
  alternates: { canonical: '/motor/' },
};

export default function MotorPage() {
  return <GateMotorReference />;
}
