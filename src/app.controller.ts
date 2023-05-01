import { Get, Controller, Render, Res, Post } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { QuizService } from './quiz/quiz.service';
import { Quiz } from './quiz';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly quizService: QuizService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render(this.appService.getIndexName(), {
    });
  }


  @Get('quiz')
  async getQuizData(): Promise<string> {
    // クイズデータを取得、でーたはjson形式で返す
    let quizData = await this.quizService.getQuizData();
    return JSON.stringify(quizData);
  }

}
