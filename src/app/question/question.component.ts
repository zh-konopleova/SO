import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import{ QuestionService } from '../question.service';
import { Observable } from 'rxjs';

import { Question } from '../question.model';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: Observable<Question>;
  isLoading: boolean = true;

  constructor(private questionService: QuestionService, private activateRoute: ActivatedRoute) {
    let id = this.activateRoute.snapshot.params['id'];

    this.question = this.questionService.get(id);
    this.question.subscribe(() => this.isLoading = false);
  }

  ngOnInit(): void {}
}
