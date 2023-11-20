import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module';
import { EnvConfigService } from './shared/infrasctructure/env-config/env-config.service';
import { EnvConfigService } from './shared/infrstructure/env-config/env-config.service';

@Module({
  imports: [EnvConfigModule],
  controllers: [AppController],
  providers: [AppService, EnvConfigService],
})
export class AppModule {}
