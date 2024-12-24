import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { HttpHelper } from 'src/common/helpers/http-helper/http-helper';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [NewsController],
  providers: [NewsService, HttpHelper],
  exports: [NewsService]
})
export class NewsModule {}
