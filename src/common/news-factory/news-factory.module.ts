import { Module } from '@nestjs/common';
import { NewsFactory } from './news-factory.service';
import { News2Module } from 'src/modules/news2/news2.module';
import { NewsModule } from 'src/modules/news/news.module';


@Module({
  imports: [News2Module, NewsModule],
  providers: [NewsFactory],
  exports: [NewsFactory],
})
export class NewsFactoryModule {}
