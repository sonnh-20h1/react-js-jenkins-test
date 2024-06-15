import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PharmacyAddress, PharmacyAddressDoc } from './pharmacy.schema';
import { PharmacyInputDto } from './pharmacy.dto';

@Injectable()
export class PharmacyService {
  constructor(
    @InjectModel(PharmacyAddress.name)
    private readonly pharmacyAddressModel: Model<PharmacyAddressDoc>,
  ) {}

  public async findAll(): Promise<PharmacyAddress[]> {
    return await this.pharmacyAddressModel.find();
  }

  public async save(data: PharmacyInputDto): Promise<PharmacyAddress> {
    const pharmacy = new PharmacyAddress();
    pharmacy.name = data.name;
    pharmacy.lat = data.lat;
    pharmacy.lng = data.lng;
    pharmacy.createdDate = new Date(Date.now());
    return await this.pharmacyAddressModel.create<PharmacyAddress>(pharmacy);
  }
}
