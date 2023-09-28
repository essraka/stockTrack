import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupService } from './../services/group.service';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { NgbModalConfig, NgbModalRef, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  public products: Product[] = [];
  public groups: Group[] = [];

  constructor(private productService: ProductService, private groupService: GroupService, private modalService: NgbModal, private activeModalService: NgbActiveModal) {
    this.getGroups();
    this.getProducts();
  }

  getGroups() {
    this.groupService.getGroups().subscribe(result => {
      this.groups = result;
    }, error => console.error(error));
  }

  getProducts() {
    this.productService.getProduct().subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  saveProduct(event: any) {
    console.log(event)
    var type = event.changes[0].type ?? 'delete';
    if (type == "insert") {
      this.productService.addProduct(event.changes[0].data).subscribe((response: any) => {
        console.log(response);
      });

    }
    else if (type == "update") {
      this.productService.updateProduct(event.changes[0].data).subscribe((response: any) => {
        console.log(response);
      });

    } else this.productService.deleteProduct(event.changes[0].key).subscribe((response: any) => {
      console.log(response);
    });

  }

}

interface Product {
  id: number;
  groupId: number;
  name: string;
  code: string;
  price: number;
  count: number;
}

interface Group {
  id: number;
  name: string;
  code: string;
}