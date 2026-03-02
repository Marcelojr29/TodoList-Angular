import { Component, OnInit } from '@angular/core';
import { Task, TaskFilter } from '../../core/models/task.model';
import { TaskService } from '../../core/services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APP_CONSTANTS } from '../../core/constants/app.constants';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  currentFilter: TaskFilter = 'all';
  loading = false;

  constructor(private taskService: TaskService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.applyFilter();
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar tarefas:', error);
        this.snackBar.open(
          APP_CONSTANTS.MESSAGES.ERROR.TASK_LOAD,
          'Fechar',
          { duration: APP_CONSTANTS.SNACKBAR_DURATION_ERROR }
        );
        this.loading = false;
      }
    });
  }

  addTask(taskData: { title: string; description: string }): void {
    const newTask: Omit<Task, 'id'> = {
      ...taskData,
      completed: false,
      createdAt: new Date()
    };

    this.taskService.addTask(newTask).subscribe({
      next: (task) => {
        this.tasks.unshift(task);
        this.applyFilter();
        this.snackBar.open(
          APP_CONSTANTS.MESSAGES.SUCCESS.TASK_ADDED,
          'Fechar',
          { duration: APP_CONSTANTS.SNACKBAR_DURATION_SUCCESS }
        );
      },
      error: (error) => {
        console.error('Erro ao adicionar tarefa:', error);
        this.snackBar.open(
          APP_CONSTANTS.MESSAGES.ERROR.TASK_ADD,
          'Fechar',
          { duration: APP_CONSTANTS.SNACKBAR_DURATION_ERROR }
        );
      }
    });
  }

  toggleTask(task: Task): void {
    this.taskService.toggleTaskStatus(task).subscribe({
      next: (updatedTask) => {
        const index = this.tasks.findIndex(t => t.id === updatedTask.id);
        if (index !== -1) {
          this.tasks[index] = updatedTask;
          this.applyFilter();
          const message = updatedTask.completed
            ? APP_CONSTANTS.MESSAGES.SUCCESS.TASK_COMPLETED
            : APP_CONSTANTS.MESSAGES.SUCCESS.TASK_PENDING;
          this.snackBar.open(
            message,
            'Fechar',
            { duration: APP_CONSTANTS.SNACKBAR_DURATION_SUCCESS }
          );
        }
      },
      error: (error) => {
        console.error('Erro ao atualizar tarefa:', error);
        this.snackBar.open(
          APP_CONSTANTS.MESSAGES.ERROR.TASK_UPDATE,
          'Fechar',
          { duration: APP_CONSTANTS.SNACKBAR_DURATION_ERROR }
        );
      }
    });
  }

  deleteTask(id: string): void {
    if (confirm(APP_CONSTANTS.MESSAGES.CONFIRM.DELETE_TASK)) {
      this.taskService.deleteTask(id).subscribe({
        next: () => {
          this.tasks = this.tasks.filter(t => t.id !== id);
          this.applyFilter();
          this.snackBar.open(
            APP_CONSTANTS.MESSAGES.SUCCESS.TASK_DELETED,
            'Fechar',
            { duration: APP_CONSTANTS.SNACKBAR_DURATION_SUCCESS }
          );
        },
        error: (error) => {
          console.error('Erro ao excluir tarefa:', error);
          this.snackBar.open(
            APP_CONSTANTS.MESSAGES.ERROR.TASK_DELETE,
            'Fechar',
            { duration: APP_CONSTANTS.SNACKBAR_DURATION_ERROR }
          );
        }
      });
    }
  }

  setFilter(filter: TaskFilter): void {
    this.currentFilter = filter;
    this.applyFilter();
  }

  applyFilter(): void {
    switch (this.currentFilter) {
      case 'pending':
          this.filteredTasks = this.tasks.filter(t => !t.completed);
          break;
      case 'completed':
          this.filteredTasks = this.tasks.filter(t => t.completed);
          break;
      default:
          this.filteredTasks = [...this.tasks];
    }
  }

  getPendingCount(): number {
    return this.tasks.filter(t => !t.completed).length;
  }

  getCompletedCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }
}
