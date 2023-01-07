declare namespace prompts {
  interface Model {
    type: 'error' | 'notification';
    message: string;
  }
}
