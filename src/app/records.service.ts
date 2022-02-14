import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: String[]=["Ajith","E195214103","ajith@mail.com"]
  info2: String[]=["Umaya","E195214157","umaya@mail.com"]
  info3: String[]=["No-one","E195214110","ajith@mail.com"]
  
  
  getinfo1() : String[]{

    return this.info1;
  }
  getinfo2() : String[]{

    return this.info2;
  }
  getinfo3() : String[]{

    return this.info3;
  }
  addInfo(info: any){
       this.info1.push(info)
       this.info2.push(info)
       this.info3.push(info)

       return this.info1 
       }

  constructor() { }
}
