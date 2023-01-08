declare namespace prompts {
  interface Model {
    id: number;
    type: 'error' | 'notification';
    message: string;
  }
}
