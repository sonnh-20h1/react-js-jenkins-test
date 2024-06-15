import { IsNumber, IsString } from 'class-validator';

export class PharmacyInputDto {
  @IsString()
  name: string;

  @IsNumber()
  lng: number;

  @IsNumber()
  lat: number;
}
