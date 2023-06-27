import { Controller, Get, Post, Body, Put, Patch, Param, Delete, Render } from '@nestjs/common';
import { BiodataOfPatientsService } from './biodata-of-patients.service';
import { CreateBiodataOfPatientDto } from './dto/create-biodata-of-patient.dto';
import { UpdateBiodataOfPatientDto } from './dto/update-biodata-of-patient.dto';
import { get } from 'https';

@Controller('biodata-of-patients')
export class BiodataOfPatientsController {
  constructor(private readonly biodataOfPatientsService: BiodataOfPatientsService) { }

  @Post()
  create(@Body() createBiodataOfPatientDto: CreateBiodataOfPatientDto) {
    return this.biodataOfPatientsService.create(createBiodataOfPatientDto);
  }

  @Get('create')
  @Render('biodata-of-patients/create-biodata-of-patients.html')
  createForm() {
  }

  @Get()
  async getData() {
    const data = await this.biodataOfPatientsService.getData();
    return data;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biodataOfPatientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiodataOfPatientDto: UpdateBiodataOfPatientDto) {
    return this.biodataOfPatientsService.update(+id, updateBiodataOfPatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biodataOfPatientsService.remove(+id);
  }
}
