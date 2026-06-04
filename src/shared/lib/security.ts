import { headers } from "next/headers";import { env } from "./env";
const attempts=new Map<string,{count:number;reset:number}>();
export async function assertSameOrigin(){const h=await headers();const origin=h.get("origin");if(origin&&origin!==new URL(env().NEXT_PUBLIC_APP_URL).origin)throw new Error("Invalid request origin")}
export async function rateLimit(key:string,limit=5,windowMs=60_000){const h=await headers();const ip=h.get("x-forwarded-for")?.split(",")[0]??"local";const id=`${key}:${ip}`;const now=Date.now();const value=attempts.get(id);if(!value||value.reset<now){attempts.set(id,{count:1,reset:now+windowMs});return}if(value.count>=limit)throw new Error("Too many requests. Please try again shortly.");value.count++}
