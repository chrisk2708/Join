/**
 * Erweiterte Tasks für das Task-Board.
 * Wird zur Erweiterung der Tasks-Liste verwendet.
 */
export const additionalTasks = [
  {
    title: 'Project Kickoff',
    description: 'Initial project setup and team alignment',
    dueDate: '2026-12-15',
    category: 'user_story',
    priority: 'urgent',
    status: 'todo',
    assigneeIds: [],
    subtasks: ['Define scope', 'Set up repository', 'Configure CI/CD'],
  },
  {
    title: 'User Authentication',
    description: 'Implement login and registration flow',
    dueDate: '2026-12-20',
    category: 'technical_task',
    priority: 'high',
    status: 'in_progress',
    assigneeIds: [],
    subtasks: ['Setup auth service', 'Implement JWT', 'Create login component'],
  },
  {
    title: 'Contact Management',
    description: 'Add CRUD operations for contacts',
    dueDate: '2026-12-22',
    category: 'technical_task',
    priority: 'medium',
    status: 'await_feedback',
    assigneeIds: [],
    subtasks: ['Create contact service', 'Add contact form', 'Implement delete functionality'],
  },
  {
    title: 'Task Assignment',
    description: 'Implement task assignment to contacts',
    dueDate: '2026-12-24',
    category: 'technical_task',
    priority: 'medium',
    status: 'todo',
    assigneeIds: [],
    subtasks: ['Add assignee selection', 'Update task service', 'Display assigned users'],
  },
  {
    title: 'Mobile Responsiveness',
    description: 'Ensure all pages work on mobile devices',
    dueDate: '2026-12-27',
    category: 'technical_task',
    priority: 'low',
    status: 'todo',
    assigneeIds: [],
    subtasks: ['Test on iPhone', 'Test on Android', 'Fix layout issues'],
  },
];