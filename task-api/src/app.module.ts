import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://janet:CjaaHoeJjxqj6lm8@cluster0.luu6cpd.mongodb.net/?retryWrites=true&w=majority',
    ),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
