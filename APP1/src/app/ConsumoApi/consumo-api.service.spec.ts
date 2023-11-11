import { TestBed } from '@angular/core/testing';
import { Character } from '../Interface/home.interfaces';
import { ConsumoApiService } from './consumo-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ConsumoApiService', () => {
  let service: ConsumoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports : [HttpClientModule], providers : [ConsumoApiService],
    });
    service = TestBed.inject(ConsumoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia obtener los personajes en la función getCharacter()', (done:DoneFn) =>{
    service.getCharacter().subscribe((personajes:Character)=>{
      console.log(personajes);
      expect(personajes.results.length).toBe(20)
      done();
    })
  });
});
