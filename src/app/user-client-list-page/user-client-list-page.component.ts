import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-client-list-page',
  templateUrl: './user-client-list-page.component.html',
  styleUrls: ['./user-client-list-page.component.css']
})
export class UserClientListPageComponent implements OnInit{

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

  alerts(machineName: String){
    console.log("user alert page");
    this.router.navigate(['/UserAlertPage',machineName]);
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