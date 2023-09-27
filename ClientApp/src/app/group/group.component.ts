import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupService } from './../services/group.service';
import { NgbModalConfig, NgbModalRef, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html'
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

  addGroup() {
    console.log('ee');
  }

  submitForm(myForm: Group) {
    alert("Entered name : " + myForm.name);
  }
  
}

interface Group {
  id: number;
  name: string;
  code: string;
}



