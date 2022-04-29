const mongoose = require("mongoose")
const { ToDo } = require("../../toDoModel")

const DB_URI = "mongodb://localhost:27017/toDoApp"

beforeAll(async () => {
  await mongoose.connect(DB_URI)
})

afterAll(async () => {
  await mongoose.connection.close({})
})

const todoTest = {
  text: "test",
  done: false,
}

describe("TODO", () => {
  it("should add Todo", async () => {
    const todo = new ToDo(todoTest)
    const savedTodo = await todo.save()

    expect(savedTodo._id).toBeDefined()
    expect(savedTodo.text).toBe(todo.text)
    expect(savedTodo.done).toBeFalsy()
  })

  it("should find one and update it", async () => {
    const todo = new ToDo(todoTest);
    const savedTodo = await todo.save();
  
    const toDoCompleted = await ToDo.findOneAndUpdate(
      { _id: savedTodo._id },
      { done: true },
      { new: true }
    );
    expect(toDoCompleted.name).toEqual(savedTodo.name);
    expect(toDoCompleted.done).toBe(true);
  });
})
