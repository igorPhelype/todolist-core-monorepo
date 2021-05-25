export type TaskList = {
  checked: boolean;
  content: string;
};

export type ModuleFederationGetter = {
  get(src: string): Promise<any>;
};

export type WindowModule = Window &
  typeof globalThis & {
    headermodule: ModuleFederationGetter;
  };
