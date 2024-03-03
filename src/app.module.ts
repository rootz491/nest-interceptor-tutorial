import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppInterceptor } from './app.interceptor';
import { RootzModule } from './rootz/rootz.module';
import { Rootz2Module } from './rootz2/rootz2.module';

@Module({
  imports: [RootzModule, Rootz2Module],
  controllers: [AppController],
  providers: [
    AppService,

    // Global interceptor, for all routes
    {
      provide: APP_INTERCEPTOR,
      useClass: AppInterceptor,
    },
  ],
})
export class AppModule {}
