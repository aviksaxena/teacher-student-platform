import type{Student}from"@/shared/domain/types";export interface StudentRepository{list():Promise<Student[]>;current():Promise<Student|null>;remove(id:string):Promise<void>}
