import { PartialType } from '@nestjs/mapped-types';
import { CreateRootz2Dto } from './create-rootz2.dto';

export class UpdateRootz2Dto extends PartialType(CreateRootz2Dto) {}
