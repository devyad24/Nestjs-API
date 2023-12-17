import { Injectable, Res } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {

  //Inject todo repository
  constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>){

  }

  create(createTodoDto: CreateTodoDto) : Promise<Todo> {
    let todo : Todo = new Todo();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    return this.todoRepository.save(todo);
  }

  findAll() : Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOne({where: {id}});
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    let todo : Todo = new Todo();
    todo.title = updateTodoDto.title;
    todo.description = updateTodoDto.description;
    todo.id = id;
    return this.todoRepository.save(todo);
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
