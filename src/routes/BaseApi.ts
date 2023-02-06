import {Router} from 'express';

import Paths from './constants/Paths';
import ExampleRoutes from './example';


// **** Variables **** //
const apiRouter = Router();

// Add API routes to base router
apiRouter.use(Paths.Example.Base, ExampleRoutes);

// **** Export default **** //
export default apiRouter;
