import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit{

  client=new Client(0,"","","");
  message="";
  constructor(private clientService:ClientService,private router:Router) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  clientRegister(){
    this.clientService.createClientService(this.client).subscribe(
      data =>{console.log("Client Added Successfully"),
    this.router.navigate(['/clientlist'])},
      error =>{console.log("Product Add Failed"),
    this.message="Product add fail. try again"})
    }
    back()
    {
      this.router.navigate(['/clientlist'])
    }
  }
