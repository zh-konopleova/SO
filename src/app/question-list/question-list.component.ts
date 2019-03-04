import { Component, OnInit } from '@angular/core';
import{ QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  constructor(private questionService: QuestionService) { }

  ngOnInit() {}

}
