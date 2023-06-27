import { Module } from '@nestjs/common';
import { BiodataOfPatientsService } from './biodata-of-patients.service';
import { BiodataOfPatientsController } from './biodata-of-patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { BiodataOfPatient } from './entities/biodata-of-patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BiodataOfPatient])],
  controllers: [BiodataOfPatientsController],
  providers: [BiodataOfPatientsService]
  })
  export class BiodataOfPatientsModule {}
