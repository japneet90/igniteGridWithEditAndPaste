import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ignite-grid';

  public gridList= [
    { Name:'John', Age: 29 },
    { Name:'Alice', Age: 27 },
    { Name:'Jessica', Age: 31 },
  ];

  public gridColumns = [
    {
      Header: "Name",
      HeaderText: "Name",
      IsEditable: false
    },
    {
      Header: "Age",
      HeaderText: "Age",
      IsEditable: true
    }
  ]

  ngOnInit(): void {

  }
}

