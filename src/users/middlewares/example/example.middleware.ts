import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');
    console.log(req.headers.authorization);

   const { authorization } = req.headers;
  if(!authorization) 
    throw new HttpException('Unauthorized', 401);
  if(authorization === 'auth') next();
  else 
    throw new HttpException('Forbidden', 403);
  next();
  }
}
