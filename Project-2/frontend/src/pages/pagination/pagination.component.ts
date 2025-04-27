import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, ParentComponent, ChildComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  productData: any;
  responseData: any;
  pageSize = 10;
  totalCount = 194;
  currentPage = 1;
  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    let data: any = await fetch('https://dummyjson.com/products?limit=184');
    data = await data.json();
    this.responseData = data.products;
    this.getData(1);
    console.log(this.responseData);

  }

  getData(pageNumber: any) {
    this.currentPage = pageNumber
    let start = (pageNumber - 1) * this.pageSize;
    this.productData = [];

    for (let i = start; i < start + this.pageSize; i++) {
      this.productData.push(this.responseData[i]);
    }
  }

  get pages(): number[] {
    return Array.from({ length: this.totalCount / this.pageSize }, (_, i) => i + 1);
  }

}
