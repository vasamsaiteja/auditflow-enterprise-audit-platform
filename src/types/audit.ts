export type AuditStatus = 'Success' | 'Failed' | 'Pending';
export type AuditAction = 'User login' | 'Permission updated' | 'Report exported' | 'User invited' | 'Password changed';

export interface AuditEvent {
  id: string;
  user: string;
  initials: string;
  action: AuditAction;
  resource: string;
  ipAddress: string;
  timestamp: string;
  status: AuditStatus;
}
