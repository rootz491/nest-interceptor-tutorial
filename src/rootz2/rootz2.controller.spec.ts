import { Test, TestingModule } from '@nestjs/testing';
import { Rootz2Controller } from './rootz2.controller';
import { Rootz2Service } from './rootz2.service';

describe('Rootz2Controller', () => {
  let controller: Rootz2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Rootz2Controller],
      providers: [Rootz2Service],
    }).compile();

    controller = module.get<Rootz2Controller>(Rootz2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
