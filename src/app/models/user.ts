export class User {
    private name: string = '';
    private role: boolean = false;
    private tasks: string = '';

    constructor(name: string, role: boolean, tasks: string) {
        this.name = name;
        this.role = role;
        this.tasks = tasks;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getRole(): boolean {
        return this.role;
    }

    public setRole(role: boolean): void {
        this.role = role;
    }

    public getTasks(): string[] {
        return this.tasks.split('-');
    }

    public setTasks(tasks: string[]): void {
        this.tasks = tasks.join('-');
    }
}