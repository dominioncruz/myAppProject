import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';
import { Repository } from 'typeorm';
import { ClinicalRecord } from './entities/clinical-record.entity';
import { BiodataOfPatient } from '../biodata-of-patients/entities/biodata-of-patient.entity';
@Injectable()
export class ClinicalRecordsService {

  constructor(
    @InjectRepository(ClinicalRecord)
    private clinicalRecordRepository: Repository<ClinicalRecord>,

    @InjectRepository(BiodataOfPatient)
    private biodataOfPatientRepository: Repository<BiodataOfPatient>
  ) { }

  async create(createClinicalRecordDto: CreateClinicalRecordDto) {
    const newClinicalRecord = this.clinicalRecordRepository.create(createClinicalRecordDto);

    if (createClinicalRecordDto.biodataOfPatient) {
      const newBiodataOfPatient = this.biodataOfPatientRepository.create(createClinicalRecordDto.biodataOfPatient);
      const biodataOfPatient: BiodataOfPatient = await this.biodataOfPatientRepository.save(newBiodataOfPatient);
      newClinicalRecord.biodataOfPatient = biodataOfPatient;
    }
    return this.clinicalRecordRepository.save(newClinicalRecord)
  }
  async getData() {
    //return `This action returns all students`;
    return await this.clinicalRecordRepository.find({ relations: ['biodataOfPatient'] });
  }

  async findOne(id: number) {
    //return `This action returns a #${id} student`;
    return await this.clinicalRecordRepository.findOne({
      where: {
        id
      }});
  }

  async update(id: number, updateClinicalRecordDto: UpdateClinicalRecordDto) {
    //return `This action updates a #${id} student`;
    return await this.clinicalRecordRepository.update(id, updateClinicalRecordDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} student`;
    return await this.clinicalRecordRepository.delete(id);
  }

  async setBiodataOfPatientById(clinicalRecordId: number, biodataOfPatientId: number) {
    try {
      return await this.clinicalRecordRepository.createQueryBuilder()
        .relation(ClinicalRecord, "biodataOfPatient")
        .of(clinicalRecordId)
        .set(biodataOfPatientId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for clinical record: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetBiodataOfPatientById(clinicalRecordId: number) {
    try {
      return await this.clinicalRecordRepository.createQueryBuilder()
        .relation(ClinicalRecord, "biodataOfPatient")
        .of(clinicalRecordId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting biodata of patient for clinical record: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}



