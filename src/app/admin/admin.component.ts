import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';

import { Question } from '../question.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminQuestionList: Observable<Question[]>;
  isLoading: boolean = true;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.adminQuestionList = this.questionService.getInitialAll();
    this.questionService.getInitialAll().subscribe(() => this.isLoading = false);
  }

  approve(question) {
    question.status = 'approved';
    this.questionService.update(question);
  }

  reject(question) {
    question.status = 'rejected';
    this.questionService.update(question);
  }

}
