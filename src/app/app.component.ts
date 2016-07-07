import { Component } from '@angular/core';

import { ResponsiveService } from './responsive.service'; 
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ ResponsiveService ],
})
export class AppComponent {
  public frameworks: any[]=[];
  
  constructor( private _service: ResponsiveService ){
    this.frameworks.push( ResponsiveService.MATERIAL_BREAKS );
    this.frameworks.push( ResponsiveService.FOUNDATION_BREAKS );
    this.frameworks.push( ResponsiveService.BOOTSTRAP_4_BREAKS );    

    //loop through frameworks to mark active
    ResponsiveService.listenForBreaks().subscribe( (brs: any[]) => {
      for(let i=0; i < this.frameworks.length; i++ ){
        for( let x=0; x < this.frameworks[i].length; x++ ){
          let br = this.frameworks[i][x];
          let pos = brs.map( k => k.framework + ':' + k.name ).indexOf( br.framework + ':' + br.name );
          br.active = (pos >= 0);
        }
      }
    } );
  }

  stringify( val: any ){
    return JSON.stringify( val );
  }
}
