
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserRole {
    Employee = "Employee",
    Admin = "Admin"
}

export interface AuthInput {
    email: string;
    password: string;
}

export interface CvInput {
    name: string;
    description: string;
    userId?: Nullable<string>;
    projectsIds: string[];
    skills: SkillMasteryInput[];
    languages: LanguageProficiencyInput[];
    is_template: boolean;
}

export interface DepartmentInput {
    name: string;
}

export interface LanguageInput {
    iso2: string;
    name: string;
    native_name?: Nullable<string>;
}

export interface LanguageProficiencyInput {
    language_name: string;
    proficiency: string;
}

export interface PositionInput {
    name: string;
}

export interface CreateProfileInput {
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
}

export interface UpdateProfileInput {
    profileId: string;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
}

export interface AddProfileSkillInput {
    profileId: string;
    skill_name: string;
    mastery: string;
}

export interface UpdateProfileSkillInput {
    profileId: string;
    skill_name: string;
    mastery: string;
}

export interface DeleteProfileSkillInput {
    profileId: string;
    skill_name: string;
}

export interface AddProfileLanguageInput {
    profileId: string;
    language_name: string;
    proficiency: string;
}

export interface UpdateProfileLanguageInput {
    profileId: string;
    language_name: string;
    proficiency: string;
}

export interface DeleteProfileLanguageInput {
    profileId: string;
    language_name: string;
}

export interface UploadAvatarInput {
    profileId: string;
    base64: string;
    size: number;
    type: string;
}

export interface DeleteAvatarInput {
    profileId: string;
}

export interface ProjectInput {
    name: string;
    internal_name?: Nullable<string>;
    description: string;
    domain: string;
    start_date: string;
    end_date?: Nullable<string>;
    team_size: number;
    skillsIds: string[];
}

export interface SkillInput {
    name: string;
}

export interface SkillMasteryInput {
    skill_name: string;
    mastery: string;
}

export interface CreateUserInput {
    auth: AuthInput;
    profile: CreateProfileInput;
    cvsIds: string[];
    departmentId?: Nullable<string>;
    positionId?: Nullable<string>;
    role: UserRole;
}

export interface UpdateUserInput {
    userId: string;
    cvsIds?: Nullable<string[]>;
    departmentId?: Nullable<string>;
    positionId?: Nullable<string>;
    role?: Nullable<UserRole>;
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
    departments(): Department[] | Promise<Department[]>;
    languages(): Nullable<Language>[] | Promise<Nullable<Language>[]>;
    positions(): Position[] | Promise<Position[]>;
    position(id: string): Position | Promise<Position>;
    profile(profileId: string): Profile | Promise<Profile>;
    projects(): Project[] | Promise<Project[]>;
    project(id: string): Project | Promise<Project>;
    skills(): Skill[] | Promise<Skill[]>;
    users(): User[] | Promise<User[]>;
    user(userId: string): User | Promise<User>;
}

export interface IMutation {
    signup(auth: AuthInput): AuthResult | Promise<AuthResult>;
    createCv(cv: CvInput): Cv | Promise<Cv>;
    updateCv(id: string, cv: CvInput): Cv | Promise<Cv>;
    deleteCv(id: string): DeleteResult | Promise<DeleteResult>;
    unbindCv(id: string): Cv | Promise<Cv>;
    createDepartment(department: DepartmentInput): Department | Promise<Department>;
    updateDepartment(id: string, department: DepartmentInput): Department | Promise<Department>;
    deleteDepartment(id: string): DeleteResult | Promise<DeleteResult>;
    createLanguage(language: LanguageInput): Language | Promise<Language>;
    updateLanguage(id: string, language: LanguageInput): Language | Promise<Language>;
    deleteLanguage(id: string): DeleteResult | Promise<DeleteResult>;
    createPosition(position: PositionInput): Position | Promise<Position>;
    updatePosition(id: string, position: PositionInput): Position | Promise<Position>;
    deletePosition(id: string): DeleteResult | Promise<DeleteResult>;
    updateProfile(profile: UpdateProfileInput): Profile | Promise<Profile>;
    addProfileSkill(skill: AddProfileSkillInput): Profile | Promise<Profile>;
    updateProfileSkill(skill: UpdateProfileSkillInput): Profile | Promise<Profile>;
    deleteProfileSkill(skill: DeleteProfileSkillInput): Profile | Promise<Profile>;
    addProfileLanguage(language: AddProfileLanguageInput): Profile | Promise<Profile>;
    updateProfileLanguage(language: UpdateProfileLanguageInput): Profile | Promise<Profile>;
    deleteProfileLanguage(language: DeleteProfileLanguageInput): Profile | Promise<Profile>;
    uploadAvatar(avatar: UploadAvatarInput): string | Promise<string>;
    deleteAvatar(avatar: DeleteAvatarInput): Nullable<Void> | Promise<Nullable<Void>>;
    createProject(project: ProjectInput): Project | Promise<Project>;
    updateProject(id: string, project: ProjectInput): Project | Promise<Project>;
    deleteProject(id: string): DeleteResult | Promise<DeleteResult>;
    createSkill(skill: SkillInput): Skill | Promise<Skill>;
    updateSkill(id: string, skill: SkillInput): Skill | Promise<Skill>;
    deleteSkill(id: string): DeleteResult | Promise<DeleteResult>;
    createUser(user: CreateUserInput): User | Promise<User>;
    updateUser(user: UpdateUserInput): User | Promise<User>;
    deleteUser(userId: string): DeleteResult | Promise<DeleteResult>;
}

export interface Cv {
    id: string;
    created_at: string;
    name: string;
    description: string;
    user?: Nullable<User>;
    projects?: Nullable<Project[]>;
    skills: SkillMastery[];
    languages: LanguageProficiency[];
    is_template: boolean;
}

export interface Department {
    id: string;
    created_at: string;
    name: string;
}

export interface Language {
    id: string;
    created_at: string;
    iso2: string;
    name: string;
    native_name?: Nullable<string>;
}

export interface LanguageProficiency {
    language_name: string;
    proficiency: string;
}

export interface Position {
    id: string;
    created_at: string;
    name: string;
}

export interface Profile {
    id: string;
    created_at: string;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    full_name?: Nullable<string>;
    avatar?: Nullable<string>;
    skills: SkillMastery[];
    languages: LanguageProficiency[];
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
    team_size: number;
    tech_stack?: Nullable<Skill[]>;
}

export interface Skill {
    id: string;
    created_at: string;
    name: string;
}

export interface SkillMastery {
    skill_name: string;
    mastery: string;
}

export interface User {
    id: string;
    created_at: string;
    email: string;
    is_verified: boolean;
    profile: Profile;
    cvs?: Nullable<Cv[]>;
    department?: Nullable<Department>;
    department_name?: Nullable<string>;
    position?: Nullable<Position>;
    position_name?: Nullable<string>;
    role: UserRole;
}

export type Void = any;
type Nullable<T> = T | null;
