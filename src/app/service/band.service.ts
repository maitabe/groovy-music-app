import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { BandModel } from "../models/band.model";  
import { BANDLIST } from "../data/data";



@Injectable()
export class BandsMusicService {
     
    getBandList(): Observable <BandModel[]> {
        console.log(BANDLIST); 
        return of (BANDLIST);
    }
     

    constuctor(){
         
    }
    //  getBands() {
    //    return this.bandsList;
    // }

}

   
