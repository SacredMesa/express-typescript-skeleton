import {Immutable} from '@src/routes/types/types';

/**
 * Express router paths go here.
 */
const Paths = {
  Base: '/',
  Example: {
    Base: '/example',
    SomeRoute: '/some-route',
  },
};


// **** Export **** //
export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
