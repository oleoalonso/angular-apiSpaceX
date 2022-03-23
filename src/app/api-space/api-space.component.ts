import { ApiSpaceService } from '../servicos/api-space.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-space',
  templateUrl: './api-space.component.html',
  styleUrls: ['./api-space.component.css']
})
export class ApiSpaceComponent implements OnInit {
  personagens: Array<any> = [];

  constructor(private apiSpaceService: ApiSpaceService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.apiSpaceService.getList().subscribe(result => {
      console.log(result);
      this.personagens = result;
    })
  }

}
