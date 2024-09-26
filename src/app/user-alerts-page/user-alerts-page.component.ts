import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-alerts-page',
  templateUrl: './user-alerts-page.component.html',
  styleUrls: ['./user-alerts-page.component.css']
})
export class UserAlertsPageComponent implements OnInit{
  
  alert: any;
  //new Alert(0,"","","","");
  machinename:any;
  selectedFileType: string | null = null; // Variable to store the selected file type

  constructor(private alertService:AlertService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.getAlertDetails();
  }

  getAlertDetails(){
    this.machinename=this.activatedRoute.snapshot.params["machineName"];
    console.log("machine Name "+ this.machinename);
    this.alertService.getAlertByMachineName(this.machinename).subscribe(
      data=>{this.alert=data,
      console.log(data)},
      error=>console.log(error)
    )
  }

  onDownloadEvent(event : Event){
    this.selectedFileType = (event.target as HTMLSelectElement).value;

  }

  buttonOnClick(){
    // Call different functions based on the selected value
    if (this.selectedFileType === 'Word') {
      this.downloadWord();
    } else if (this.selectedFileType === 'Excel') {
      this.downloadExcel();
    } else if (this.selectedFileType === 'PDF') {
      this.downloadPdf();
    }

  }


  downloadPdf() {
    console.log("inside downloadPdf")
    this.alertService.downloadAlertByMachineName(this.machinename).subscribe(
      (data: Blob) => {
        
        // Handle the Blob data, e.g., trigger a download
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);

        // Create a hidden link and trigger the download
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `alerts_${this.machinename}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      error => {
        console.error(error);
        // Handle the error, e.g., show an error message to the user.
      }
    );
  }

  downloadExcel(){
    console.log("Download To Excel");
  }

  downloadWord(){
    console.log("Download To Word");
  }

}