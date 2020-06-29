import { Component, OnInit , ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';

export interface Information {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource = new MatTableDataSource<Information>();

  columns = [
    {title: 'userId', name: "User ID"},
    {title: 'id', name: "ID"},
    {title: 'title', name: "Title"},
    {title: 'body', name: "Body"}
  ]

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor (private _http: HttpClient) {
    this._http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: Information[]) => {
      this.dataSource.data = data;
    });
  }

}
