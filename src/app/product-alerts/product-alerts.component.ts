import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

/* the decorator indicates that the following class is a component. It provides metadata about the component, including its selector, templates, and styles.
*/
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}