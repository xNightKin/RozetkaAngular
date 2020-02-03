import { NotebookMain } from './../../shared/notebook-main.model';
import { NotebookMainService } from './../../shared/notebook-main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.scss']
})
export class NotebookListComponent implements OnInit {
  p: number = 1;
  constructor(private service: NotebookMainService) { }

  ngOnInit() {
    
  }
}
