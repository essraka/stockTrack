import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupService } from './../services/group.service';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { NgbModalConfig, NgbModalRef, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent {
  public groups: Group[] = [];

  constructor(private groupService: GroupService, private modalService: NgbModal, private activeModalService: NgbActiveModal) {
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups().subscribe(result => {
      this.groups = result;
    }, error => console.error(error));
  }

  addGroup(event: any) {
    console.log(event)
    var type = event.changes[0].type ?? 'delete';
    if (type == "insert") {
    this.groupService.addGroup(event.changes[0].data).subscribe((response: any) => {
      console.log(response);
    });
    
    }
    else if (type == "update") {
      this.groupService.updateGroup(event.changes[0].data).subscribe((response: any) => {
        console.log(response);
      });

    } else this.groupService.deleteGroup(event.changes[0].key).subscribe((response: any) => {
      console.log(response);
    });
    
  }
  
}

interface Group {
  id: number;
  name: string;
  code: string;
}



