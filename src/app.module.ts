import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PharmacyModule } from './modules/pharmacy/pharmacy.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://pharmacy:UFoSGXuPGZrPP9ax@cluster0.bpapfxz.mongodb.net/pharmacy-db`,
    ),
    PharmacyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
