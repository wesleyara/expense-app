import { Module } from '@nestjs/common';
import { EnvConfigModule } from './env-config/env-config.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EnvConfigModule, PrismaModule],
})
export class InfraModule {}
