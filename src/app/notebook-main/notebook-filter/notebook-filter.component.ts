import { NotebookMainService } from './../../shared/notebook-main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebook-filter',
  templateUrl: './notebook-filter.component.html',
  styleUrls: ['./notebook-filter.component.scss']
})
export class NotebookFilterComponent implements OnInit {

  constructor(private service:NotebookMainService) { }

  ngOnInit() {
  }

}
