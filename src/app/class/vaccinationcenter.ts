export class VaccinationCenter {
    code : number = 0;
    centername : string = "";
    address : string = "";
    city : string = "";
    state : string = "";
    district :string = "";
    pincode : string = "";

public getCode(){
    return this.code;
} 
public setCode(code : number) {
    this.code = code;
}

public getCentername(){
    return this.centername;
} 
public setCentername(centername : string){
    this.centername = centername;
}

public getAddress(){
    return this.centername;
} 
public setAddress(address : string){
    this.address = address;
}

public getCity() {
    return this.city;
}
public setCity(city: string) {
    this.city = city;
}

public getState() {
    return this.state;
}
public setState(state: string) {
    this.state = state;
}
public getPinCode() {
    return this.pincode;
}
public setPinCode(pincode: string) {
    this.pincode = pincode;
}

public getDistrict() {
    return this.district;
}
public setDistrict(district: string) {
    this.district = district;
}

}
