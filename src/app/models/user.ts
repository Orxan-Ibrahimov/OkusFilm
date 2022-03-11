export class User{
     
    constructor(email:string, id:string, private _token:string, private _tokenExpirationDate:Date) {}

    get token(){
        if(this._tokenExpirationDate == null || new Date() > this._tokenExpirationDate)
        return null

        return this._token;
    }
    
}