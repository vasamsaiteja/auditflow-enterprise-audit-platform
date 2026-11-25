export type AuditStatus = "Success" | "Failed" | "Pending";

export type ActivityType =
  | "Authentication"
  | "User Management"
  | "Data Update"
  | "System";

export interface AuditLog {
  id: number;
  user: string;
  action: string;
  description: string;
  activityType: ActivityType;
  status: AuditStatus;
  timestamp: string;
  ipAddress: string;
}
