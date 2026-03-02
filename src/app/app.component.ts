import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>TodoList Solutions</span>
    </mat-toolbar>
    <main>
      <app-task-list></app-task-list>
    </main>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 64px);
      background: #fafafa;
    }
  `]
})
export class AppComponent {}
