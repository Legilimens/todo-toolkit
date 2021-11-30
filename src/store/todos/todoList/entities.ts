export type TTodos = {
  todos: Array<TTodo>;
};

export type TTodo = {
  id: string;
  text: string;
  completed: boolean;
};
