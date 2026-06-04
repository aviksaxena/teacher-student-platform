export interface NotificationProvider{notify(userId:string,title:string,body:string):Promise<void>}export class NullNotificationProvider implements NotificationProvider{async notify(){return}}
