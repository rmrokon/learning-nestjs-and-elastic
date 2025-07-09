import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from './status/status.module';
import { PrismaService } from './prisma/prisma.service';
import { MyLogger } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [StatusModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, MyLogger],
  exports: [PrismaService, MyLogger],
})
export class AppModule {}
