import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProjectService } from '../../../../shared/services/project.service';
import { Project } from '../../../../shared/models/project';
import { Projectexists } from '../../../../shared/models/projectexists';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createProjectForm: FormGroup;

  projectList: Project[];

  constructor(private fb: FormBuilder, private ps: ProjectService) {
      this.createForm();
  }

  ngOnInit() {
    this.listProjects();
  }

  createForm() {
    this.createProjectForm = this.fb.group({
      name: ['', Validators.required ],
      shortName: ['', [Validators.required, Validators.maxLength(3)] ],
      description: ['']
    });
  }

  addProject(ProjectName, ProjectShortName, ProjectDescription) {
    this.ps.addProject(ProjectName, ProjectShortName, ProjectDescription).subscribe((data: Projectexists) => {
      var result = data.exists;
      this.createProjectForm.controls["shortName"].setErrors({ 'projectExists':  result});
      if(!result) {
        this.listProjects();
        this.createForm();
      }
    });
  }

  async listProjects() {
    this.ps.getProjects().subscribe((data: Project[]) => {
      this.projectList = data;
    });
  }

}
