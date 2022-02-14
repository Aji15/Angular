import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { RecordsService } from '../records.service';
@Component({
  selector: 'app-dep-emplist',
  templateUrl: './dep-emplist.component.html',
  styleUrls: ['./dep-emplist.component.css'],
  providers : [RecordsService]
})
export class DepEmplistComponent implements OnInit {

  infoRecieved1: String[]=[]
  infoRecieved2: String[]=[]
  infoRecieved3: String[]=[]

  getinfofromService1(){
    this.infoRecieved1=this.rservice.getinfo1()
  }
  getinfofromService2(){
    this.infoRecieved2=this.rservice.getinfo2()
  }
  getinfofromService3(){
    this.infoRecieved3=this.rservice.getinfo3()
  }
  


  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }
  updateInfo(frm : any){
     this .rservice.addInfo(frm.value.location)
  }

}
