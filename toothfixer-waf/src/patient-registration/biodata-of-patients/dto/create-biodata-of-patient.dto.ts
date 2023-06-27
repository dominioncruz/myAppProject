export class CreateBiodataOfPatientDto {
    readonly firstName: string;
    readonly surName: string;
    readonly middleName: string;
    readonly dateOfBirth: string;
    readonly homeAddress: string;
    readonly dateOfRegistration: string
    readonly matriculationNumber?: string;
}