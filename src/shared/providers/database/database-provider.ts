export interface DatabaseProvider{from(table:string):unknown;rpc(name:string,args?:Record<string,unknown>):unknown}
