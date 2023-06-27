import { Module } from '@nestjs/common';
import { ClinicalRecordsService } from './clinical-records.service';
import { ClinicalRecordsController } from './clinical-records.controller';
import { ClinicalRecord } from './entities/clinical-record.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BiodataOfPatient } from '../biodata-of-patients/entities/biodata-of-patient.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ClinicalRecord, BiodataOfPatient])],
  controllers: [ClinicalRecordsController],
  providers: [ClinicalRecordsService]
})
export class ClinicalRecordsModule {}
