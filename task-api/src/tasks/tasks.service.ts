import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { CreatedTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}
  // obtener todos
  findAll() {
    this.taskModel.find();
  }
  // crear de forma Sinc
  createTask(task: CreatedTaskDto) {
    const createdTask = this.taskModel.create(task);
    return createdTask;
  }
  // crear de forma Asinc
  async create(task: CreatedTaskDto) {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }
  // obtener uno
  async findOne(id: string) {
    return this.taskModel.findById(id);
  }
  // eliminar
  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
  // actualizar
  async update(id: string, task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task);
  }
}
