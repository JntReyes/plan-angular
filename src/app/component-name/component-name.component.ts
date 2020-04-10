import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../services/info-pagina.service';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent implements OnInit {

  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
