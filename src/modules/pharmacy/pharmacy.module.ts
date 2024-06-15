import { Module } from '@nestjs/common';
import { PharmacyPublicController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PharmacyAddress, PharmacyAddressSchema } from './pharmacy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PharmacyAddress.name,
        schema: PharmacyAddressSchema,
      },
    ]),
  ],
  controllers: [PharmacyPublicController],
  providers: [PharmacyService],
})
export class PharmacyModule {}
