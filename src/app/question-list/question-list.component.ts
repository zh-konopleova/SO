import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';

import { Question } from '../question.model';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questionList: Observable<Question[]>;
  isLoading: boolean = true;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionList = this.questionService.getApprovedAll();
    this.questionService.getApprovedAll().subscribe(() => this.isLoading = false);
  }
}
