import { HttpException, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { map } from 'rxjs';

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context, next) {
    const request: Request = context.switchToHttp().getRequest();

    console.log('Intecepting...');

    return next.handle().pipe(
      map((data: any) => {
        if (data === null)
          throw new HttpException('Not found', 404);
        return data;
      }),
    );
  }
}
