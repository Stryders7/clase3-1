import { Component } from '@angular/core';
import { ConsumoApiService } from '../ConsumoApi/consumo-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private capi: ConsumoApiService, private router: Router) {}
  public character: any;
  ngOnInit(){
    this.capi.getCharacter().subscribe(
      (data)=>{
        console.log(data)
        this.character = data.results;
        localStorage.setItem('Character', JSON.stringify(data.result))
      }
    )
  }

}
