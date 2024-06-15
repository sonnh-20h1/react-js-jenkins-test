import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PharmacyAddressDoc = PharmacyAddress & Document;

@Schema({
  collection: 'pharmacy-addresses',
  timestamps: {
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
  },
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class PharmacyAddress {
  @Prop({ type: String })
  name: string;

  @Prop({ type: Number, default: 0 })
  lat: number;

  @Prop({ type: Number, default: 0 })
  lng: number;

  @Prop({ type: Boolean, default: true })
  activated: boolean;

  @Prop({ type: Date, default: Date.now() })
  createdDate: Date;

  @Prop({ type: Date })
  updatedDate: Date;
}

export const PharmacyAddressSchema =
  SchemaFactory.createForClass(PharmacyAddress);
