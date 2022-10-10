declare namespace user {
  interface User {
    id: number;
    username: string;
    email: string;
    projects: project.Response[];
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    role: user.Role;
  }

  interface Role {
    id: number;
    name: string;
    description: string;
    type: 'authenticated' | 'user';
    createdAt: string;
    updatedAt: string;
  }
}
