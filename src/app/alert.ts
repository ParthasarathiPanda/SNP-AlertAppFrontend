export class Alert {
    constructor(
        public id:number,
        public machineName:String,
        public alertName:String,
        public alertType:String,
        public threshold:String,
    ){}
}
