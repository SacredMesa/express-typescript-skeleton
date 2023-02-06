import {RouteError} from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
// **** Variables **** //

// Errors
export const Errors = {
  Unauth: 'Unauthorized',
  SomeError(sth: string) {
    return `Error message details: "${sth}"`;
  },
  AnotherError() {
    return 'Some other error message';
  },
} as const;


// **** Functions **** //

/**
 * Do Something.
 */
function doSomething(arg: string): string {
  const user = 'user1';
  if (!user) {
    throw new RouteError(
      HttpStatusCodes.UNAUTHORIZED,
      Errors.SomeError(arg),
    );
  }
  return `did sth to ${arg}`;
}


// **** Export default **** //

export default {
  doSomething,
} as const;
