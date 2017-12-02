import { Component, OnInit } from '@angular/core';
import { BandsMusicService } from '../../service/band.service';
import { BandModel } from '../../models/band.model';


@Component({
    selector: 'sidebar',
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
    
    bands: BandModel [];
  
    
    constructor(private bandsService: BandsMusicService) { }    
    
    ngOnInit() {
        this.getBands();
    }

    getBands(): void {
        this.bandsService.getBandList().subscribe(bands => this.bands = bands);
    }

    playMusic() {
        
     }
     
}