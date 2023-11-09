import {Component, inject} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {TasksService} from "../../services/tasks.service";
import {Task} from "../../models/task.model";
import {ProgressEnum} from '../../enums/progress.enum';

@Component({
  selector: 'app-old-control-flow',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass
  ],
  templateUrl: './old-control-flow.component.html',
})
export class OldControlFlowComponent {

  private taskService: TasksService = inject(TasksService);
  tasks: Task[] = this.taskService.getAllTasks();
  ProgressEnum = ProgressEnum;

  searchTask(value: string) {
    this.tasks = this.taskService.searchTask(value);
  }
}
