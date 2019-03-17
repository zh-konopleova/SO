import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{ QuestionService } from '../question.service';

import { Question } from '../question.model';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit(): void {
    let question = new Question().deserialize(this.form.value);
    this.questionService.create(question);

    this.form.reset();
    this.router.navigate(['/']);
  }

  isControlValid(control: string) {
    return this.form.controls[control].valid;
  }
}
