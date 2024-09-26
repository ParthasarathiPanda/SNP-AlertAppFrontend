import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit{

  client=new Client(0,"","","");
  id:any;
  constructor(private clientService:ClientService,private activatedRoute:ActivatedRoute,private route:Router) { }
  ngOnInit(): void {
    
    this.getClientDetails();
  }
  getClientDetails() {
    this.id = this.activatedRoute.snapshot.params["id"];
    console.log("clientid" + this.id);
    this.clientService.getClientByIdService(this.id).subscribe(
      data => {
        this.client = data; // Assign retrieved client data to the client object
        console.log("inside getClient Details method in update client.ts " + data);
      },
      error => console.log(error)
    );
  }
  
  saveClient(id:number,client:Client)
        {
          /*console.log("save client method"+id),
          this.clientService.updateClientService(id,client).subscribe(
            data=>{console.log(data),
              console.log(id),
            alert("Client Updated Successfully");
            this.route.navigate([''])},
            error=>console.log(error)
          )*/
          console.log("save client method: " + this.id); // Log the id here
          this.clientService.updateClientService(this.id, this.client).subscribe(
            data => {
              console.log(data);
              console.log(this.id); // Log the id again to see if it's still 0
              alert("Client Updated Successfully");
              this.route.navigate(['/clientlist']);
            },
            error => console.log(error)
          );
        }

        logOut(){
          this.route.navigate(['/'])
        }

}
