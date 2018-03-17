import { Directive, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-header]', // Attribute selector,
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeaderDirective {

  @Input("header") header: HTMLElement;
  headerHeight;
  scrollContent;
  tabHeight;
  tabs;
  constructor(public element: ElementRef, public renderer: Renderer) {

    console.log('Hello HideHeaderDirective Directive');

  }
  ngOnInit(){
    this.headerHeight= this.header.clientHeight;
    this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 400ms');
    this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setElementStyle(this.scrollContent, 'webkitTransition', 'margin-top 400ms');
    this.tabs = document.querySelectorAll('.tabs');
    this.renderer.setElementStyle(this.tabs[0].firstChild, 'webkitTransition', 'bottom 400ms');
    this.tabHeight = this.tabs[0].firstChild.clientHeight;
 
  }
  onContentScroll(event){
    if(event.deltaY > this.headerHeight){
      this.renderer.setElementStyle(this.header, 'top', "-"+this.headerHeight+"px");
      this.renderer.setElementStyle(this.scrollContent, 'margin-top', '0px');
      this.renderer.setElementStyle(this.tabs[0].firstChild, 'bottom', "-"+this.tabHeight+"px");
      this.renderer.setElementStyle(this.scrollContent, 'margin-bottom', '0px');
    }else{
    
     
      this.renderer.setElementStyle(this.header, 'top', '0px');
      this.renderer.setElementStyle(this.scrollContent, 'margin-top', this.headerHeight+"px");
      this.renderer.setElementStyle(this.tabs[0].firstChild, 'bottom', "0px");
     
    }
}
}