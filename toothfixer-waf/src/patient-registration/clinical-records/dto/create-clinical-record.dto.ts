import { CreateBiodataOfPatientDto } from "src/patient-registration/biodata-of-patients/dto/create-biodata-of-patient.dto";

export class CreateClinicalRecordDto {
    readonly clinicDate: string;
    readonly natureOfAilment: string;
    readonly medicinePrescribed: string;
    readonly procedureUndertaken: string;
    readonly dateOfNextAppointment: string;
    readonly biodataOfPatient: CreateBiodataOfPatientDto;
}
