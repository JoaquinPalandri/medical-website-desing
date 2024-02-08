import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  protected readonly console = console;

  scrollToSection(sectionId: string) {
    var section = document.getElementById(sectionId);
    if (section){
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  protected readonly document = document;
}
