export class User {
    private name: string;
    private role: boolean;
    private tasks: string;
    private eliminated: boolean = false;

    constructor(name: string, role: boolean, tasks: string, eliminated: boolean) {
        this.name = name;
        this.role = role;
        this.tasks = tasks;
        this.eliminated = eliminated;
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

    public getEliminated(): boolean {
        return this.eliminated;
    }

    public setEliminated(): void {
        this.eliminated = true;
    }
}