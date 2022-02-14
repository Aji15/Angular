import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public name ="InterPolation"
  public hint ="Sorry"
  public image = " /assets/1613152472677.jpg"
  public value =""
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log('Thank you')
  }
}
