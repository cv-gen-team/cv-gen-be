
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AuthInput {
    email: string;
    password: string;
}

export interface CvInput {
    name: string;
    description: string;
    userId?: Nullable<string>;
    projectsIds: string[];
}

export interface LanguageInput {
    iso2: string;
    name: string;
}

export interface ProfileInput {
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    department?: Nullable<string>;
    specialization?: Nullable<string>;
    skills?: Nullable<string[]>;
    languages?: Nullable<string[]>;
}

export interface ProjectInput {
    name: string;
    internal_name?: Nullable<string>;
    description: string;
    domain: string;
    start_date: string;
    end_date?: Nullable<string>;
}

export interface UserInput {
    profile: ProfileInput;
    cvsIds: string[];
}

export interface DeleteResult {
    affected: number;
}

export interface AuthResult {
    user: User;
    access_token: string;
}

export interface IQuery {
    login(auth: AuthInput): AuthResult | Promise<AuthResult>;
    cvs(): Cv[] | Promise<Cv[]>;
    cv(id: string): Cv | Promise<Cv>;
    languages(): Nullable<Language>[] | Promise<Nullable<Language>[]>;
    projects(): Project[] | Promise<Project[]>;
    project(id: string): Project | Promise<Project>;
    users(): User[] | Promise<User[]>;
    user(id: string): User | Promise<User>;
}

export interface IMutation {
    signup(auth: AuthInput): AuthResult | Promise<AuthResult>;
    createCv(cv: CvInput): Cv | Promise<Cv>;
    updateCv(id: string, cv: CvInput): Cv | Promise<Cv>;
    deleteCv(id: string): DeleteResult | Promise<DeleteResult>;
    createLanguage(language: LanguageInput): Language | Promise<Language>;
    deleteLanguage(id: string): DeleteResult | Promise<DeleteResult>;
    createProject(project: ProjectInput): Project | Promise<Project>;
    updateProject(id: string, project: ProjectInput): Project | Promise<Project>;
    deleteProject(id: string): DeleteResult | Promise<DeleteResult>;
    createUser(user: UserInput, auth: AuthInput): User | Promise<User>;
    updateUser(id: string, user: UserInput): User | Promise<User>;
    deleteUser(id: string): DeleteResult | Promise<DeleteResult>;
}

export interface Cv {
    id: string;
    created_at: string;
    name: string;
    description: string;
    user?: Nullable<User>;
    projects?: Nullable<Project[]>;
}

export interface Language {
    id: string;
    created_at: string;
    iso2: string;
    name: string;
}

export interface Profile {
    id: string;
    created_at: string;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    department?: Nullable<string>;
    specialization?: Nullable<string>;
    skills?: Nullable<string[]>;
    languages?: Nullable<string[]>;
}

export interface Project {
    id: string;
    created_at: string;
    name: string;
    internal_name?: Nullable<string>;
    description: string;
    domain: string;
    start_date: string;
    end_date?: Nullable<string>;
}

export interface User {
    id: string;
    created_at: string;
    email: string;
    profile: Profile;
    cvs?: Nullable<Cv[]>;
}

type Nullable<T> = T | null;
