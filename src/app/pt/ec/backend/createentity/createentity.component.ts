import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../shared/services/project.service';
import { Project } from '../../../../shared/models/project';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-createentity',
  templateUrl: './createentity.component.html',
  styleUrls: ['./createentity.component.css']
})
export class CreateentityComponent implements OnInit {

  projectList: Project[];

  createEntityForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: ProjectService) {
    this.createForm();
  }

  ngOnInit() {
    this.listProjects();
  }

  createForm() {
    this.createEntityForm = this.fb.group({
      projectName: ['', Validators.required ],
      schemaName: ['', Validators.required ],
      entityName: ['', Validators.required ],
      description: ['']
    });
  }

  async listProjects() {
    this.ps.getProjects().subscribe((data: Project[]) => {
      this.projectList = data;
    });
  }

}
