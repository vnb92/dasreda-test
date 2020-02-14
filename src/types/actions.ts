import { actions } from '../store/actions';

/* Выведение типов для action creators
** статья - https://habr.com/ru/company/alfa/blog/452620/*/
type InferTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type ActionTypes = ReturnType<InferTypes<typeof actions>>;
