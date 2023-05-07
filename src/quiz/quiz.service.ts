import { Injectable } from '@nestjs/common';
import { Quiz } from '../quiz';
import axios from 'axios';

@Injectable()
// クイズのデータを取得するサービス
export class QuizService {
  private readonly URL = 'https://opentdb.com/api.php?amount=10';

  async getQuizData(): Promise<Quiz[]>{
    const resposnse = await axios.get(this.URL);
    const quizData = resposnse.data.results;
    return quizData.map((data: any) => new Quiz(data));
  }
}
