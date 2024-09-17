export class Game {
    private done: number;
    private todo: number;

    constructor(done: number, todo: number) {
        this.done = done;
        this.todo = todo;
    }

    public getDone(): number {
        return this.done;
    }

    public setDone(done: number): void {
        this.done = done;
    }

    public getTodo(): number {
        return this.todo;
    }

    public setTodo(todo: number): void {
        this.todo = todo;
    }
}