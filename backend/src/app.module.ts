import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismadbModule } from './prismadb/prismadb.module';

@Module({
  imports: [AuthModule, PrismadbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
