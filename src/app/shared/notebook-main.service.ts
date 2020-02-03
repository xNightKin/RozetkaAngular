import { NotebookMain } from './notebook-main.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotebookMainService {
  formData:NotebookMain;
  readonly rootAPIurl= 'https://localhost:44374/api';
  list:NotebookMain[];
  public filterManuf: Array<any>;
  public filterDiag: Array<any>;
  rangeValues: number[] = [5000, 63000];
  constructor(private http: HttpClient) { }
  filterData: any;

  getNotebookInfo(){
    this.http.get(this.rootAPIurl+'/RozetkaNotebook').toPromise().then(res => this.filterData = res as NotebookMain[]);
    return this.http.get(this.rootAPIurl+'/RozetkaNotebook').toPromise().then(res => this.list = res as NotebookMain[]);
  }

  checked() {
    return this.filterManuf.filter(list => { return list.checked; });
  }

  checkedDiag() {
    return this.filterDiag.filter(list => { return list.checked; });
  }

  handleChange() {
    this.list = this.filterData.filter(item => {
      return (item.NotebookPrice >= this.rangeValues[0] && item.NotebookPrice <= this.rangeValues[1])
    });
  }
 
  filterManufacture() {
    this.filterManuf = [
      {
        value: 'Asus',
        checked: false
      },
      {
        value: 'HP',
        checked: false
      },
      {
        value: 'Acer',
        checked: false
      },
      {
        value: 'Lenovo',
        checked: false
      },
      {
        value: 'Dell',
        checked: false
      },
      {
        value: 'MSI',
        checked: false
      },
    ];
  }
  filterDiagonal() {
    this.filterDiag = [
      {
        value: '13.3',
        checked: false
      },
      {
        value: '14',
        checked: false
      },
      {
        value: '15.6',
        checked: false
      },
      {
        value: '17.3',
        checked: false
      },
    ];
  }
}
