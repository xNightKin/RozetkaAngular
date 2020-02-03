import { FilterPipe } from './app.filter';
import { NotebookMainService } from './shared/notebook-main.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { NotebookMainComponent } from './notebook-main/notebook-main.component';
import { NotebookListComponent } from './notebook-main/notebook-list/notebook-list.component';
import { NotebookFilterComponent } from './notebook-main/notebook-filter/notebook-filter.component';
import {MatCardModule} from '@angular/material/card';
import {SliderModule} from 'primeng/slider';
import {PanelModule} from 'primeng/panel';
@NgModule({
  declarations: [
    AppComponent,
    NotebookMainComponent,
    NotebookListComponent,
    NotebookFilterComponent,
    FilterPipe
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    SliderModule,
    PanelModule
  ],
  providers: [NotebookMainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
