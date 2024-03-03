import { Injectable } from '@nestjs/common';
import { CreateRootz2Dto } from './dto/create-rootz2.dto';
import { UpdateRootz2Dto } from './dto/update-rootz2.dto';

@Injectable()
export class Rootz2Service {
  create(createRootz2Dto: CreateRootz2Dto) {
    return 'This action adds a new rootz2';
  }

  findAll() {
    return `This action returns all rootz2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rootz2`;
  }

  update(id: number, updateRootz2Dto: UpdateRootz2Dto) {
    return `This action updates a #${id} rootz2`;
  }

  remove(id: number) {
    return `This action removes a #${id} rootz2`;
  }
}
