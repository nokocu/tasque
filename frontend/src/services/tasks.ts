import api from './api';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  createdAt: string;
  updatedAt: string;
  dueDate?: string;
  completedAt?: string;
  projectId: number;
  projectName: string;
  assigneeId?: string;
  assigneeName?: string;
  workflowStateId: number;
  workflowStateName: string;
  workflowStateColor: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  ownerName: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectRequest {
  name: string;
  description: string;
  startDate?: string;
}

export interface UpdateProjectRequest {
  name: string;
  description: string;
}

export interface CreateTaskRequest {
  title: string;
  description: string;
  priority: string;
  dueDate?: string;
  projectId: number;
  assigneeId?: string;
}

export interface UpdateTaskRequest {
  title: string;
  description: string;
  priority: string;
  dueDate?: string;
  assigneeId?: string;
  workflowStateId?: number;
}

export const tasksService = {
  async getTasks(): Promise<Task[]> {
    const response = await api.get('/tasks');
    return response.data;
  },

  async getTask(id: number): Promise<Task> {
    const response = await api.get(`/tasks/${id}`);
    return response.data;
  },

  async createTask(task: CreateTaskRequest): Promise<Task> {
    const response = await api.post('/tasks', task);
    return response.data;
  },

  async updateTask(id: number, task: UpdateTaskRequest): Promise<void> {
    await api.put(`/tasks/${id}`, task);
  },

  async deleteTask(id: number): Promise<void> {
    await api.delete(`/tasks/${id}`);
  },

  async getProjects(): Promise<Project[]> {
    const response = await api.get('/tasks/projects');
    return response.data;
  },

  async createProject(project: CreateProjectRequest): Promise<Project> {
    const response = await api.post('/tasks/projects', project);
    return response.data;
  },

  async updateProject(id: number, project: UpdateProjectRequest): Promise<Project> {
    const response = await api.put(`/tasks/projects/${id}`, project);
    return response.data;
  },

  async deleteProject(id: number): Promise<void> {
    await api.delete(`/tasks/projects/${id}`);
  },
};
