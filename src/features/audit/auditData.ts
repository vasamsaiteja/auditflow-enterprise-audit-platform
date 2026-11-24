import type { AuditEvent } from '../../types/audit';

export const auditEvents: AuditEvent[] = [
  { id: 'AUD-2048', user: 'Olivia Rhye', initials: 'OR', action: 'Permission updated', resource: 'Finance workspace', ipAddress: '192.168.1.24', timestamp: 'Today, 10:42 AM', status: 'Success' },
  { id: 'AUD-2047', user: 'Phoenix Baker', initials: 'PB', action: 'User login', resource: 'Admin portal', ipAddress: '192.168.1.18', timestamp: 'Today, 10:35 AM', status: 'Success' },
  { id: 'AUD-2046', user: 'Lana Steiner', initials: 'LS', action: 'Report exported', resource: 'Quarterly audit report', ipAddress: '10.0.0.82', timestamp: 'Today, 10:21 AM', status: 'Pending' },
  { id: 'AUD-2045', user: 'Demi Wilkinson', initials: 'DW', action: 'User invited', resource: 'Marketing workspace', ipAddress: '192.168.1.31', timestamp: 'Today, 09:58 AM', status: 'Success' },
  { id: 'AUD-2044', user: 'Candice Wu', initials: 'CW', action: 'Password changed', resource: 'Account security', ipAddress: '172.16.0.14', timestamp: 'Today, 09:41 AM', status: 'Failed' },
];
