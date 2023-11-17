import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}
  // obtener todos
  findAll() {
    return this.taskModel.find();
  }
  // crear de forma Sinc
  createTask(task: CreateTaskDto) {
    const createdTask = this.taskModel.create(task);
    return createdTask;
  }
  // crear de forma Asinc
  async create(task: CreateTaskDto) {
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
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }
}
