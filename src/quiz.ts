export class Quiz {
  question: string;
  category: string;
  difficulty: string;
  correctAnswer: string;
  incorrectAnswers: string[];

  constructor(data: any) {
    this.question = data.question;
    this.category = data.category;
    this.difficulty = data.difficulty;
    this.correctAnswer = data.correct_answer;
    this.incorrectAnswers = data.incorrect_answers;
  }
}