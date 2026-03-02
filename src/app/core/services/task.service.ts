import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) { }

  // Aqui o GET vai listar todas as tasks, ordenando por data de criação (mais recentes primeiro)
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      map(tasks => tasks.sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ))
    );
  }

  // Aqui o POST vai criar uma nova task, e o backend vai gerar um ID único para ela
  addTask(task: Omit<Task, 'id'>): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // Aqui o PUT vai atualizar uma task existente, usando o ID para identificar qual task atualizar
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  // Aqui o DELETE vai remover uma task, usando o ID para identificar qual task deletar
  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Aqui o toggleTaskStatus vai alternar o status de conclusão de uma task, usando o ID para identificar qual task atualizar
  toggleTaskStatus(task: Task): Observable<Task> {
    const updateTask = { ...task, completed: !task.completed };
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, updateTask);
  }
}
