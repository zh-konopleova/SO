import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';

import { Question } from '../question.model';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: Question;
  isLoading: boolean = true;

  form: FormGroup = new FormGroup({
    answer: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private questionService: QuestionService, private activateRoute: ActivatedRoute) {
    let id = this.activateRoute.snapshot.params['id'];

    this.questionService.get(id).subscribe((question) => {
      this.question = question;
      this.isLoading = false
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    let answer = this.form.get('answer').value;
    this.question.answers.push(answer);
    this.form.reset();

    this.questionService.update(this.question);
  }

  isControlValid(control: string): boolean {
    return this.form.controls[control].valid;
  }
}
