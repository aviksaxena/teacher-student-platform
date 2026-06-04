export type Role = "teacher" | "student";
export type InvitationStatus = "pending" | "accepted" | "revoked" | "expired";
export interface Profile { id:string; email:string; role:Role; created_at:string; updated_at:string }
export interface Teacher { id:string; profile_id:string; created_at:string; profile?:Profile }
export interface Student { id:string; profile_id:string; teacher_id:string; created_at:string; profile?:Profile }
export interface Invitation { id:string; teacher_id:string; student_email:string; token:string; status:InvitationStatus; created_at:string; expires_at:string }
