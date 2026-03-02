export const APP_CONSTANTS = {
  // Validações de formulário
  MIN_TITLE_LENGTH: 3,
  MAX_TITLE_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 500,

  // Notificações
  SNACKBAR_DURATION_SUCCESS: 2000,
  SNACKBAR_DURATION_ERROR: 3000,

  // Mensagens de sucesso
  MESSAGES: {
    SUCCESS: {
      TASK_ADDED: 'Tarefa adicionada com sucesso!',
      TASK_UPDATED: 'Tarefa atualizada com sucesso!',
      TASK_DELETED: 'Tarefa excluída com sucesso!',
      TASK_COMPLETED: 'Tarefa marcada como concluída!',
      TASK_PENDING: 'Tarefa marcada como pendente!'
    },
    ERROR: {
      TASK_ADD: 'Erro ao adicionar tarefa. Tente novamente.',
      TASK_UPDATE: 'Erro ao atualizar tarefa. Tente novamente.',
      TASK_DELETE: 'Erro ao excluir tarefa. Tente novamente.',
      TASK_LOAD: 'Erro ao carregar tarefas. Tente novamente.'
    },
    CONFIRM: {
      DELETE_TASK: 'Tem certeza que deseja excluir esta tarefa?'
    }
  }
};
