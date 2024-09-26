import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit{

  clients: any;
  constructor(private clientService:ClientService,private router:Router) { }

  ngOnInit(): void {
    this.clients = [];
    this.clientService.getAllClientService().subscribe(
      data => {
        this.clients = data;
        console.log('Clients data:', this.clients); // Add this line to display all clients on console
        // Sort the clients array by clientName in ascending order
        this.clients.sort((a: any, b: any) => a.clientName.localeCompare(b.clientName));
      },
      error=>console.log(error)
    )
  }

  updateClient(id:number)
  {
    console.log("updateclient function");
    this.router.navigate(['/updateClient',id]);
  }

  deleteClient(id:number)
  {
  this.clientService.deleteClientService(id).subscribe(
    data=>{console.log("succuss"),
    this.clientService.getAllClientService().subscribe(
      data=>this.clients=data)},
    error=>console.log("error")
  )
  }

  alerts(machineName: string){
    this.router.navigate(['/adminAlertPage', machineName]);
  }

  searchByName(clientname: string){
    console.log(clientname);
    this.clients = [];
    this.clientService.getClientByName(clientname).subscribe(
      data => {
        this.clients = data;
        console.log('Clients data:', this.clients); // Add this line to display all clients on console
      },
      error=>console.log(error)
    )
  }

  clear(){
    this.clients = [];
    this.clientService.getAllClientService().subscribe(
      data => {
        this.clients = data;
        console.log('Clients data:', this.clients); // Add this line to display all clients on console
        // Sort the clients array by clientName in ascending order
        this.clients.sort((a: any, b: any) => a.clientName.localeCompare(b.clientName));
      },
      error=>console.log(error)
    )
  }

}
