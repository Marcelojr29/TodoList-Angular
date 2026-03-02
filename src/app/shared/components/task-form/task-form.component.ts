import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APP_CONSTANTS } from '../../../core/constants/app.constants';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<{ title: string; description: string }>();
  title = 'Título da Tarefa';
  titleRequired = 'Título é obrigatório';
  titleMinLength = `Título deve conter no mínimo ${APP_CONSTANTS.MIN_TITLE_LENGTH} caracteres`;

  description = 'Descrição';
  descriptionRequired = 'Descrição é obrigatória';

  submitButton = 'Adicionar Tarefa';

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(APP_CONSTANTS.MIN_TITLE_LENGTH),
        Validators.maxLength(APP_CONSTANTS.MAX_TITLE_LENGTH)
      ]],
      description: ['', [
        Validators.required,
        Validators.maxLength(APP_CONSTANTS.MAX_DESCRIPTION_LENGTH)
      ]]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.addTask.emit(this.taskForm.value);
      this.taskForm.reset();
    }
  }
}
