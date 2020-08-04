import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-principal-academico',
  templateUrl: './principal-academico.component.html',
  styleUrls: ['./principal-academico.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalAcademicoComponent implements OnInit {
  
  constructor(private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner();
  }

  
  spinner() : void{
    this.spinnerService.show();
    setTimeout(() =>{
      this.spinnerService.hide();
    },2500);
  }
}