import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:8089/api/clients";
  private url2="http://localhost:8089/api/clients/GetByName";
  private url3="http://localhost:8089/api/clients/GetById";

  public createClientService(client:Client):Observable<Object>
  {
  return this.http.post<any>("http://localhost:8089/api/clients/register",client)
  }

  public getAllClientService():Observable<Client[]>
  {
  return this.http.get<any>("http://localhost:8089/api/clients/all");
  }

  public getClientByIdService(id:number):Observable<Client>
  {
  return this.http.get<Client>(`${this.url3}/${id}`);
  }

  public updateClientService(id:number,client:Client):Observable<any>
  {
    console.log("Updating client with id:", id);
  console.log("Updated client data:", client);
  return this.http.put(`${this.url}/${id}`,client);
  }
  
  public deleteClientService(id:number):Observable<any>
  {
  return this.http.delete(`${this.url}/${id}`);
  }

  public getClientByName(clientname: any):Observable<Client[]>{
    console.log("inside service: "+clientname);
    return this.http.get<any>(`${this.url2}/${clientname}`);
  }
}
