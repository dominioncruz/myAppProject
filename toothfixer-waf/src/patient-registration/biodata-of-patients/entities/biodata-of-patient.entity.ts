import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ClinicalRecord } from "src/patient-registration/clinical-records/entities/clinical-record.entity";
@Entity()
export class BiodataOfPatient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    surName: string;

    @Column()
    middleName: string;

    @Column()
    dateOfBirth: string;

    @Column()
    homeAddress: string

    @Column({ default: new Date().getFullYear() })
    dateOfRegistration: string;

    @Column({ nullable: true, default: '_33492894723' })
    matriculationNumber: string;

    @OneToMany(() => ClinicalRecord, clinicalRecord => clinicalRecord.biodataOfPatient)
    clinicalRecords: ClinicalRecord[];
}
