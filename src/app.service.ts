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

  async getTriviaData() {
    const url = 'https://opentdb.com/api.php?amount=10';
    try{
      const res = await axios.get(url);
      return res.data.results;
    } catch(e) {
      console.error(e);
      return null;
    }
  }
}
