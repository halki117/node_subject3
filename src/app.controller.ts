import { Get, Controller, Render, Res, Post } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  root(@Res() res: Response) {
    return res.render(this.appService.getIndexName(), {
      message: this.appService.getMessage(),
    });
  }

  // @Post('/execute')
  // async execute(): Promise<any> {
  //   // 非同期処理のコードをここに書く
  //   return { 
  //     message: '非同期処理が完了しました。',
  //   };
  // }

  @Get('trivia')
  async getTriviaData() {
    return this.appService.getTriviaData();
  }

}
