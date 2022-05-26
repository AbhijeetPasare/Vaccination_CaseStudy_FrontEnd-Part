import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccineInventoryService {

  private baseUrl = "http://localhost:8080/api/vaccine/inventory";
  constructor(private http: HttpClient) { }
  
  createVaccineInventory (code : number, inv: Object) : Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/new/${code}`,inv);
  }
  getVaccineInventoriesList() : Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  getVaccineInventory(invId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/invId/${invId}`);
  }

  updateVaccineInventory(id : number, value : any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }
  deleteVaccineInventory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
