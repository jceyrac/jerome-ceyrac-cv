import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    getAbout(): Promise<string>;
    getCertifications(): Promise<string>;
    getContact(): Promise<string>;
    getEducation(): Promise<string>;
    getExperience(): Promise<string>;
    getHero(): Promise<string>;
    getProjects(): Promise<string>;
    getSkills(): Promise<string>;
    updateAbout(newAbout: string): Promise<void>;
    updateCertifications(newCertifications: string): Promise<void>;
    updateContact(newContact: string): Promise<void>;
    updateEducation(newEducation: string): Promise<void>;
    updateExperience(newExperience: string): Promise<void>;
    updateHero(newHero: string): Promise<void>;
    updateProjects(newProjects: string): Promise<void>;
    updateSkills(newSkills: string): Promise<void>;
}
