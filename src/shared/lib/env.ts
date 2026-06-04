import { z } from "zod";
const schema=z.object({NEXT_PUBLIC_APP_URL:z.string().url().default("http://localhost:3000"),NEXT_PUBLIC_SUPABASE_URL:z.string().url(),NEXT_PUBLIC_SUPABASE_ANON_KEY:z.string().min(1),RESEND_API_KEY:z.string().optional(),RESEND_FROM_EMAIL:z.string().optional()});
export const env=()=>schema.parse(process.env);
