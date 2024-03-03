import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Rootz2Service } from './rootz2.service';
import { CreateRootz2Dto } from './dto/create-rootz2.dto';
import { UpdateRootz2Dto } from './dto/update-rootz2.dto';

@Controller('rootz2')
export class Rootz2Controller {
  constructor(private readonly rootz2Service: Rootz2Service) {}

  @Post()
  create(@Body() createRootz2Dto: CreateRootz2Dto) {
    return this.rootz2Service.create(createRootz2Dto);
  }

  @Get()
  findAll() {
    return this.rootz2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rootz2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRootz2Dto: UpdateRootz2Dto) {
    return this.rootz2Service.update(+id, updateRootz2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rootz2Service.remove(+id);
  }
}
