import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'project-name';
  jsonData = JSON.parse('{ "form": [{"id": "name","value": "","type": "text"},{"id": "email","value": "","type": "text"},{"id": "gender","value": "male","type": "radio"}]}');
  updateData = this.jsonData;

  ngOnInit() {
    
  }

}
