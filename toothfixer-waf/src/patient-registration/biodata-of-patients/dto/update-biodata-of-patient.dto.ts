import { PartialType } from '@nestjs/mapped-types';
import { CreateBiodataOfPatientDto } from './create-biodata-of-patient.dto';

export class UpdateBiodataOfPatientDto extends PartialType(CreateBiodataOfPatientDto) {}
