import { addTask, deleteTask } from "../src/index.js";
let emptyList=[]
describe('add and delete functions', ()=>{
    test('Add item', () =>
     { expect(addTask()).toEqual(emptyList)})
})