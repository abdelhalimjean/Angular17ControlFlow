import {Routes} from '@angular/router';
import {NewControlFlowComponent} from "./components/new-control-flow/new-control-flow.component";
import {OldControlFlowComponent} from "./components/old-control-flow/old-control-flow.component";

export const routes: Routes = [
  {
    path: '',
    component: OldControlFlowComponent,
    title: 'Old Control Flow'
  },
  {
    path: 'new',
    component: NewControlFlowComponent,
    title: 'New Control Flow'
  }
];
