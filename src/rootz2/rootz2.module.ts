import { Module } from '@nestjs/common';
import { Rootz2Service } from './rootz2.service';
import { Rootz2Controller } from './rootz2.controller';

@Module({
  controllers: [Rootz2Controller],
  providers: [Rootz2Service],
})
export class Rootz2Module {}
