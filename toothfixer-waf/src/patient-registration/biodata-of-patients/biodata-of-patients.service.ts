import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBiodataOfPatientDto } from './dto/create-biodata-of-patient.dto';
import { UpdateBiodataOfPatientDto } from './dto/update-biodata-of-patient.dto';
import { BiodataOfPatient } from './entities/biodata-of-patient.entity';

@Injectable()
export class BiodataOfPatientsService {
  constructor(
    @InjectRepository(BiodataOfPatient)
    private biodataOfPatientsRepository: Repository<BiodataOfPatient>
  ) { }
  async create(createBiodataOfPatientDto: CreateBiodataOfPatientDto) {
    const newBiodataOfPatient: BiodataOfPatient = this.biodataOfPatientsRepository.create(createBiodataOfPatientDto)
    return this.biodataOfPatientsRepository.save(newBiodataOfPatient);
    //return 'This action adds a new user';
  }
  async getData(): Promise<BiodataOfPatient[]> {
    return this.biodataOfPatientsRepository.find();
  }
  async findAll() {
    //return `This action returns all biodata of patient`;
    return await this.biodataOfPatientsRepository.find();
  }
  async findOne(id: number) {
    //return `This action returns a #${id} biodataOfPatient`;
    return await this.biodataOfPatientsRepository.findOne({
      where: {
        id // same as id:id
      }
    });
  }
  async update(id: number, updateBiodataOfPatientDto: UpdateBiodataOfPatientDto) {
    //return `This action updates a #${id} biodataOfPatient`;
    return await this.biodataOfPatientsRepository.update(id, updateBiodataOfPatientDto);
  }
  async remove(id: number) {
    //return `This action removes a #${id} biodataOfPatient`;
    return await this.biodataOfPatientsRepository.delete(id);
    }
}
