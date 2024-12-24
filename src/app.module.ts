import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './modules/news/news.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import configuration from 'config/configuration';
import { News2Module } from './modules/news2/news2.module';
import { NewsFactoryModule } from './common/news-factory/news-factory.module';

@Module({
  imports: [
    NewsModule,
    News2Module,
    HttpModule,
    NewsFactoryModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
