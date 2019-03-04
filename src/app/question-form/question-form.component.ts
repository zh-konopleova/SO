import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ QuestionService } from '../question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  title: string;
  description: string;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {}

  onSubmit(): void {
    this.questionService.createQuestion(this.title, this.description);
  }
}
