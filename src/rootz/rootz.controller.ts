import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { RootzService } from './rootz.service';
import { AppInterceptor } from 'src/app.interceptor';

@Controller('rootz')
// Controller specific interceptor
// @UseInterceptors(AppInterceptor)
export class RootzController {
  constructor(private readonly rootzService: RootzService) {}

  @Get()
  getHello(): object {
    return {
      message: 'rootz',
    };
  }

  @Get('2')
  // API endpoint specific interceptor
  // @UseInterceptors(AppInterceptor)
  getHello2(): object {
    return null;
  }
}
