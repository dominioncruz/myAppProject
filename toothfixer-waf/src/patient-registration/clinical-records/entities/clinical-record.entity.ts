import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { BiodataOfPatient } from 'src/patient-registration/biodata-of-patients/entities/biodata-of-patient.entity'

@Entity()
export class ClinicalRecord {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({default: new Date().getDay()})
    clinicDate: string;

    @Column()
    natureOfAilment: string;

    @Column({nullable : true})
    medicinePrescribed: string;

    @Column({nullable : true})
    procedureUndertaken: string;

    @Column({ default: new Date().getFullYear() })
    dateOfNextAppointment: string;

    @ManyToOne(type => BiodataOfPatient, biodataOfPatient => biodataOfPatient.clinicalRecords, { cascade: true })
    biodataOfPatient: BiodataOfPatient;
    
}
