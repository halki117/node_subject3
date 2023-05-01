import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizService } from './quiz/quiz.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, QuizService],
})
export class AppModule {}
