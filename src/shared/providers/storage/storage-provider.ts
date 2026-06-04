export interface StorageProvider{upload(path:string,data:Blob):Promise<string>;remove(path:string):Promise<void>}
