# 📋 TodoList Solutions

<div align="center">
  
![Angular](https://img.shields.io/badge/Angular-15.2-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Material](https://img.shields.io/badge/Material-15.2-009688?style=for-the-badge&logo=material-design&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**Sistema de Gerenciamento de Tarefas Pessoais**

</div>

---

## 📖 Sobre o Projeto

TodoList Solutions é uma aplicação web moderna desenvolvida com Angular 15 para gerenciamento eficiente de tarefas pessoais. O projeto foi criado com foco em boas práticas de desenvolvimento, arquitetura escalável e experiência do usuário intuitiva.

### 🎯 Objetivo

Fornecer uma ferramenta simples e eficaz para organização de tarefas diárias, permitindo que usuários adicionem, visualizem, editem e excluam tarefas de forma rápida e prática.

---

## ✨ Funcionalidades

### Core Features

- ✅ **Adicionar Tarefas** - Crie novas tarefas com título e descrição
- ✅ **Listar Tarefas** - Visualize todas as tarefas ordenadas por data de criação
- ✅ **Marcar como Concluída/Pendente** - Alterne o status das tarefas facilmente
- ✅ **Excluir Tarefas** - Remova tarefas com confirmação de segurança
- ✅ **Filtrar Tarefas** - Filtre por: Todas, Pendentes ou Concluídas
- ✅ **Contadores Inteligentes** - Veja quantas tarefas estão pendentes ou concluídas
- ✅ **Data de Criação** - Cada tarefa registra quando foi criada

### Diferenciais

- 🎨 **Interface Moderna** - Design limpo usando Angular Material
- 📱 **Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Performance** - Carregamento rápido e interações fluidas
- 🔔 **Notificações** - Feedback imediato para todas as ações do usuário
- 🛡️ **Validações Robustas** - Formulários com validação em tempo real
- 🎯 **Arquitetura Escalável** - Código organizado seguindo padrões do Angular

---

## 🏗️ Arquitetura do Projeto

```
src/
├── app/
│   ├── core/                    # Módulos centrais da aplicação
│   │   ├── constants/           # Constantes e configurações
│   │   │   └── app.constants.ts # Mensagens, validações e configurações
│   │   ├── models/              # Interfaces e tipos TypeScript
│   │   │   └── task.model.ts    # Modelo de dados Task
│   │   └── services/            # Serviços compartilhados
│   │       └── task.service.ts  # Service para operações CRUD
│   │
│   ├── features/                # Módulos de funcionalidades
│   │   └── task-list/           # Módulo de listagem de tarefas
│   │       ├── task-list.component.ts
│   │       ├── task-list.component.html
│   │       └── task-list.component.scss
│   │
│   ├── shared/                  # Componentes reutilizáveis
│   │   └── components/
│   │       └── task-form/       # Formulário de criação de tarefas
│   │           ├── task-form.component.ts
│   │           ├── task-form.component.html
│   │           └── task-form.component.scss
│   │
│   ├── app.component.ts         # Componente raiz
│   ├── app.module.ts            # Módulo principal
│   └── app-routing.module.ts    # Configuração de rotas
│
├── environments/                # Configurações por ambiente
│   ├── environment.ts           # Ambiente de desenvolvimento
│   └── environment.prod.ts      # Ambiente de produção
│
└── assets/                      # Recursos estáticos

```

### Princípios Aplicados

- **Separation of Concerns** - Separação clara entre lógica, apresentação e dados
- **Single Responsibility** - Cada classe/componente tem uma única responsabilidade
- **DRY (Don't Repeat Yourself)** - Código reutilizável e sem duplicação
- **Type Safety** - Uso extensivo de TypeScript para segurança de tipos

---

## 🛠️ Tecnologias Utilizadas

### Frontend

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Angular** | 15.2.0 | Framework principal para desenvolvimento |
| **TypeScript** | 4.9.4 | Superset JavaScript com tipagem estática |
| **Angular Material** | 15.2.9 | Biblioteca de componentes UI |
| **RxJS** | 7.8.0 | Programação reativa com Observables |
| **SCSS** | - | Pré-processador CSS |

### Backend (Mock)

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **JSON Server** | 1.0.0-beta.12 | API REST fake para desenvolvimento |

### Ferramentas de Desenvolvimento

- **Angular CLI** - Scaffolding e build
- **NPM** - Gerenciador de pacotes
- **Concurrently** - Execução paralela de scripts
- **Git** - Controle de versão

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14.x ou superior)
- **NPM** (versão 6.x ou superior)
- **Git** (para clonar o repositório)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/todolist-solutions.git
cd todolist-solutions
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute a aplicação**

**Opção 1: Executar Frontend e Backend simultaneamente**
```bash
npm run dev
```

**Opção 2: Executar separadamente**

Terminal 1 - Backend (JSON Server):
```bash
npm run server
```

Terminal 2 - Frontend (Angular):
```bash
npm start
```

4. **Acesse a aplicação**

Abra o navegador e acesse: `http://localhost:4200`

A API estará rodando em: `http://localhost:3000`

---

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento Angular |
| `npm run server` | Inicia o JSON Server na porta 3000 |
| `npm run dev` | Inicia Frontend e Backend simultaneamente |
| `npm run build` | Compila o projeto para produção |
| `npm test` | Executa os testes unitários |
| `npm run watch` | Compila em modo watch (desenvolvimento) |

---

## 🔧 Configuração

### Variáveis de Ambiente

O projeto utiliza arquivos de environment para configurações específicas:

**Desenvolvimento** (`src/environments/environment.ts`):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
```

**Produção** (`src/environments/environment.prod.ts`):
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://sua-api-production.com'
};
```

### Constantes da Aplicação

Configurações centralizadas em `src/app/core/constants/app.constants.ts`:

- Validações de formulário
- Mensagens de sucesso/erro
- Durações de notificações
- Limites de caracteres

---

## 🎨 Interface do Usuário

### Tema e Design

- **Paleta de Cores**: Indigo & Pink (Angular Material)
- **Tipografia**: Roboto
- **Ícones**: Material Icons
- **Responsividade**: Grid system adaptativo

### Componentes Principais

1. **Toolbar** - Cabeçalho com branding
2. **Task Form** - Formulário de criação com validações
3. **Chips de Filtro** - Filtros interativos com contadores
4. **Task Cards** - Cards responsivos em grid
5. **Empty State** - Estado vazio amigável
6. **Snackbar** - Notificações temporárias

---

## 🧪 Testes

### Estrutura de Testes

```bash
npm test
```

Os arquivos de teste estão localizados junto aos componentes:
- `*.component.spec.ts` - Testes de componentes
- `*.service.spec.ts` - Testes de serviços

---

## 📦 Build para Produção

### Compilar o Projeto

```bash
npm run build
```

Os arquivos compilados serão gerados em `dist/todolist-solutions/`.

### Configurações de Build

- **Otimização de código** ✅
- **Minificação** ✅
- **Tree Shaking** ✅
- **AOT Compilation** ✅
- **Source Maps** (apenas em dev)

---

## 🔐 Segurança

### Medidas Implementadas

- ✅ Sanitização automática do Angular contra XSS
- ✅ Validações de formulário no frontend
- ✅ Tratamento centralizado de erros HTTP
- ✅ Confirmação para ações destrutivas
- ✅ Type safety com TypeScript

### Recomendações para Produção

- [ ] Implementar autenticação e autorização
- [ ] Adicionar HTTPS
- [ ] Validações no backend
- [ ] Rate limiting na API
- [ ] CORS configurado adequadamente
- [ ] Testes de segurança automatizados

---

## 🐛 Tratamento de Erros

### Sistema de Notificações

Todas as operações fornecem feedback ao usuário:

- **Sucesso** - Snackbar verde com ícone de sucesso (2s)
- **Erro** - Snackbar vermelha com mensagem clara (3s)
- **Loading** - Spinner enquanto carrega dados

### Logs de Console

Erros são logados no console para debug em desenvolvimento.

---

## 🚧 Roadmap - Próximas Funcionalidades

### Versão 2.0 (Planejada)

- [ ] **Categorias** - Organizar tarefas por categorias
- [ ] **Prioridades** - Alta, Média, Baixa
- [ ] **Data de Vencimento** - Adicionar deadline nas tarefas
- [ ] **Pesquisa** - Buscar tarefas por título/descrição
- [ ] **Paginação** - Para listas grandes
- [ ] **Modo Escuro** - Tema dark mode
- [ ] **Drag & Drop** - Reordenar tarefas
- [ ] **Compartilhamento** - Compartilhar listas

### Versão 3.0 (Futuro)

- [ ] **Backend Real** - Substituir JSON Server
- [ ] **Autenticação** - Login com usuário
- [ ] **Multi-usuário** - Compartilhar tarefas entre usuários
- [ ] **PWA** - Funcionar offline
- [ ] **Notificações Push** - Lembrar de tarefas
- [ ] **Estatísticas** - Dashboard com métricas
- [ ] **Exportar** - PDF, CSV, Excel

---

## 📊 Status do Projeto

🟢 **Em Desenvolvimento Ativo**

- Versão Atual: **1.0.0**
- Última Atualização: **Março de 2026**
- Status: **Funcional e Estável**

---

## 👨‍💻 Autor

**Seu Nome**

- GitHub: [@Marcelojr29](https://github.com/Marcelojr29)
- LinkedIn: [Marcelo Borges de Oliveira Jr.](https://linkedin.com/in/marcelobjr)
- Email: marcelobjr.ti@gmail.com

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- Comunidade Angular pela documentação excelente
- Angular Material pela biblioteca de componentes
- JSON Server por facilitar o desenvolvimento
- Todos os contribuidores e usuários do projeto

---

## 📞 Suporte

Encontrou um bug ou tem uma sugestão?

- Abra uma [Issue](https://github.com/Marcelojr29/todolist-solutions/issues)
- Entre em contato por email: marcelobjr.ti@gmail.com

---

<div align="center">

**Desenvolvido com ❤️ e Angular**

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

</div>
