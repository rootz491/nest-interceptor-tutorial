import { Test, TestingModule } from '@nestjs/testing';
import { RootzController } from './rootz.controller';
import { RootzService } from './rootz.service';

describe('RootzController', () => {
  let controller: RootzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RootzController],
      providers: [RootzService],
    }).compile();

    controller = module.get<RootzController>(RootzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
