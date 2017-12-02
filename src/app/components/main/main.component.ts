import {Component, ViewChild, ElementRef} from '@angular/core';
import { BandModel } from "../../models/band.model";

@Component({
    selector: 'main-cotainer',
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"]
})
export class MainComponent {
    title: string = "Welcome.";
    
    constructor(){
        /* data from server */
               
    };
       
}

