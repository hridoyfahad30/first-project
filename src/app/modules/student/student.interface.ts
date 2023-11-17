import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
}

export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string
}

export type Student = {
    id: string;
    name: UserName,
    gender: "male" | "female";
    email: string;
    dateOfBirth: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup? : "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string;
    guardian: Guardian;


}