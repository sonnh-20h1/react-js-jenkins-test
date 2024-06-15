import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { PharmacyInputDto } from './pharmacy.dto';

@Controller('pharmacy')
export class PharmacyPublicController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get('list')
  @HttpCode(HttpStatus.OK)
  async list() {
    try {
      const data = await this.pharmacyService.findAll();
      return data;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('add')
  async add(@Body() payload: PharmacyInputDto) {
    try {
      const data = await this.pharmacyService.save(payload);
      return data;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
