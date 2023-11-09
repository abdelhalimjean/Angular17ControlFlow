import {Component, inject} from '@angular/core';
import {ProgressEnum} from '../../enums/progress.enum';
import {Task} from '../../models/task.model';
import {TasksService} from "../../services/tasks.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-new-control-flow',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './new-control-flow.component.html'
})
export class NewControlFlowComponent {

  private taskService: TasksService = inject(TasksService);
  tasks: Task[] = this.taskService.getAllTasks();
  ProgressEnum = ProgressEnum;

  searchTask(value: string) {
    this.tasks = this.taskService.searchTask(value);
  }
}


