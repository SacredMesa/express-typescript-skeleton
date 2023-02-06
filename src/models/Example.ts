// **** Variables **** //

export enum EnumExample {
  Standard,
  Admin,
}


// **** Types **** //

export interface Example {
  ex: string
}

// **** Functions **** //

const exampleFunction = (): string => {
  return 'something';
};

// **** Export default **** //

export default {
  exampleFunction,
} as const;
