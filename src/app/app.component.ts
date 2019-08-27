import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  maliciousCode:  string = 'Hello <script>alert("HI")</script> World!';
  classessToApply = 'italicsClass boldClass';
  applyBoldClass: boolean = false;
  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  addStyles() {
    let styles = {
      'font-size.px': this.fontSize,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal'
    }
    return styles;
  }

  onClick() {
    console.log('Button Click!');
  }

  addClasses() {
    let classes = {
      italicsClass: true,
      boldClass: true,
    }
    return classes;
  }

  title = 'AngularCrud';
  showLoadingIndicator = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError) {
        this.showLoadingIndicator = false;
      }
    });
  }
}
