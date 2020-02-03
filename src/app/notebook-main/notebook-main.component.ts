import { NotebookMainService } from './../shared/notebook-main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebook-main',
  templateUrl: './notebook-main.component.html',
  styleUrls: ['./notebook-main.component.scss']
})
export class NotebookMainComponent implements OnInit {

  constructor(private service: NotebookMainService) { }

  ngOnInit() {
    this.service.getNotebookInfo();
    this.service.filterManufacture();
    this.service.filterDiagonal();
  }

}
