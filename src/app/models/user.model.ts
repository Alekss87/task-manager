import { TaskModel } from "./task.model";

export class UserModel {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public tasks: TaskModel[]
    ) {}
}
