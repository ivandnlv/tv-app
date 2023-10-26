type Screens = 'main' | 'input' | 'final' | 'empty';

declare global {
  interface HTMLElement {
    dataset: {
      group: string;
    };
  }
}

export type { Screens };
