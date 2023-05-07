import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getIndexName(): string {
    const name: string = 'index';
    return name;
  }

  getMessage(): string {
    const message: string = 'Hello World!';
    return message;
  }

}
