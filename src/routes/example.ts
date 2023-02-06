import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import {IReq} from '@src/routes/types/types';
import {Router} from 'express';
import Paths from '@src/routes/constants/Paths';
import ExampleService from '@src/services/ExampleService';
import {Response} from 'express';


// **** Types **** //
interface SampleReqFields {
  email: string;
}

// **** Setup **** //
const exampleRouter = Router();

// Example API route
exampleRouter.post(
  Paths.Example.SomeRoute,
  example,
);


// **** Functions **** //
/**
 * Something
 */
function example(req: IReq<SampleReqFields>, res: Response) {
  const {email} = req.body;
  const processed = ExampleService.doSomething(email);
  return res.status(HttpStatusCodes.OK).json({
    resData: `Entered Example Route: ${processed}`,
  });
}


// **** Export default **** //

export default exampleRouter;
