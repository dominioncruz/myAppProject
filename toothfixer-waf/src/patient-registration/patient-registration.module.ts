import { Module } from '@nestjs/common';
import { BiodataOfPatientsModule } from './biodata-of-patients/biodata-of-patients.module';
import { ClinicalRecordsModule } from './clinical-records/clinical-records.module';

@Module({
  imports: [BiodataOfPatientsModule, ClinicalRecordsModule]
})
export class PatientRegistrationModule {}
