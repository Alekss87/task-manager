import { UserModel } from "./user.model";
import { TASKS } from '../models/mock-tasks';

export const USERS: UserModel[] = [
    { id: 1, name: 'Andreas Meyer', email: 'a.meyer@gmx.de', tasks: []},
    { id: 2, name: 'Hans Zimmermann', email: 'h.zimmermann@gmx.de', tasks: []},
    { id: 3, name: 'Daniel Müller', email: 'd.mueller@gmail.com', tasks: []},
    { id: 4, name: 'Marcus Schneider', email: 'm.schneider@gmx.de', tasks: []},
    { id: 5, name: 'Laura Kurz', email: 'l.kurz@gmx.de', tasks: []},
    { id: 6, name: 'Felix Schmidt', email: 'f.schmidt@gmail.com', tasks: []},
    { id: 7, name: 'Sarah Schwarz', email: 's.schwarz@gmail.com', tasks: []},
    { id: 8, name: 'Thorsten Wagner', email: 't.wagner@gmail.com', tasks: []},
    { id: 9, name: 'Max Weber', email: 'm.weber@gmx.de', tasks: []},
    { id: 10, name: 'Tomas Neumann', email: 't.neumann@gmail.com', tasks: []}
    ];