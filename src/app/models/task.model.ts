import {ProgressEnum} from "../enums/progress.enum";

export class Task {
  content: string;
  urgent: boolean;
  state: ProgressEnum;

  constructor(content: string, urgent: boolean = false, state: ProgressEnum = ProgressEnum.PLANNED) {
    this.content = content;
    this.urgent = urgent;
    this.state = state;
  }
}
