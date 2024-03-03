import { Module } from '@nestjs/common';
import { RootzService } from './rootz.service';
import { RootzController } from './rootz.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppInterceptor } from 'src/app.interceptor';

@Module({
  controllers: [RootzController],
  providers: [RootzService],
})
export class RootzModule {}
