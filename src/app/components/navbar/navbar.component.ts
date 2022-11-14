import { Component, OnInit } from '@angular/core';
import { faCircleQuestion, faBook, faLaptopCode, faShareNodes, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faCircleQuestion = faCircleQuestion;
  faBook = faBook;
  faLaptopCode = faLaptopCode;
  faShareNodes = faShareNodes;
  faFile = faFile;
  
  constructor() { }

  ngOnInit(): void {
  }

}
