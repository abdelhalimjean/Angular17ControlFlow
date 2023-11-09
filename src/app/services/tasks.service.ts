import {Injectable} from "@angular/core";
import {Task} from "../models/task.model";
import {ProgressEnum} from "../enums/progress.enum";

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  public getAllTasks(): Task[] {
    return [
      new Task("Buy milk"),
      new Task("Pay internet bill", true),
      new Task("Water garden", false, ProgressEnum.FINISHED),
      new Task("Buy gift for baby sister"),
      new Task("Learn Angular 17", false, ProgressEnum.IN_PROGRESS),
      new Task("Go to the gym"),
      new Task("Clean the house", false, ProgressEnum.FINISHED),
      new Task("Cancel netflix", false, ProgressEnum.FINISHED),
    ]
  }

  public searchTask(value: string): Task[] {
    return this.getAllTasks().filter((task: Task) => task.content.toLowerCase().includes(value.toLowerCase()));
  }
}
