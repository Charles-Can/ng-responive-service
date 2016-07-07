import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class ResponsiveService {

  static WINDOW$: Observable<{}>;

  constructor() {}

  static getCurrentBreak(): any[]{
    let frameworks = [  ResponsiveService.BOOTSTRAP_4_BREAKS, 
                        ResponsiveService.FOUNDATION_BREAKS, 
                        ResponsiveService.MATERIAL_BREAKS 
                      ];
    return frameworks.map( fw => {
      return fw.reduce( (pv,cv,ci,src) => {
        let w = window.innerWidth;
        return ( pv && w > pv.min && w < pv.max ) ? pv : cv;
      } );
    } );
  }

  static listenForBreaks(): Observable<{}> {
    if(! ResponsiveService.WINDOW$ ){
      ResponsiveService.WINDOW$ = Observable
                                    .fromEvent( window, 'resize' )
                                    .debounce( () => Observable.interval(200) )
                                    .map( e => {
                                      return this.getCurrentBreak();
                                    } );
    }
    return ResponsiveService.WINDOW$;
  }

  static get BOOTSTRAP_4_BREAKS(): any[]{
    return [
      { name: 'XS', min: 0, max: 542.4 },
      { name: 'SM', min: 543, max: 766.4 },
      { name: 'MD', min: 767, max: 990.4 },   
      { name: 'LG', min: 991, max: 1198.4 },      
      { name: 'XL', min: 1199, max: 10000 },      
    ].map( bp => {
      return Object.assign( bp, 
        { units: 'px', 
          framework: 'Bootstrap 4', 
          src: 'http://v4-alpha.getbootstrap.com/layout/overview/' 
        } 
      );
    } );
  }

  static get FOUNDATION_BREAKS(): any[]{
    return [
      { name: 'SM', min: 0, max: 639 },
      { name: 'MD', min: 640, max: 1023 },
      { name: 'LG', min: 1024, max: 1199 },   
      { name: 'XL', min: 1200, max: 1439 },      
      { name: 'LG', min: 1440, max: 10000 },      
    ].map( bp => {
      return Object.assign( bp, 
        { units: 'px', 
          framework: 'foundation 6', 
          src: 'http://foundation.zurb.com/sites/docs/media-queries.html' 
        } 
      );
    } );
  }

  static get MATERIAL_BREAKS(): any[]{
    return [
      { name: 'XS', min: 0, max: 480 },      
      { name: 'SM', min: 481, max: 960 },
      { name: 'MD', min: 961, max: 1280 },
      { name: 'LG', min: 1281, max: 1600 },
      { name: 'XL', min: 1601, max: 10000 },
    ].map( bp => {
      return Object.assign( bp, 
        { units: 'px', 
          framework: 'material', 
          src: 'https://material.google.com/layout/responsive-ui.html#responsive-ui-breakpoints' 
        } 
      );
    } );
  }
}