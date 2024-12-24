import { Injectable, Logger } from '@nestjs/common';
import { ICampaignProcessor } from 'src/common/interfaces/ICampaignProcessor';
import { NewsService } from 'src/modules/news/news.service';
import { News2Service } from 'src/modules/news2/news2.service';

@Injectable()
export class NewsFactory {
  private readonly logger = new Logger(NewsFactory.name);

  constructor(
    private readonly news2Service: News2Service,
    private readonly newsService: NewsService,
  ) {}
  private newsProcessMethodMap: {
    [key: string]: any;
  } = {
    'article': this.newsService,
    'event': this.news2Service,
  };

  processNews(method: string): ICampaignProcessor {
    const newsProcessorClass = this.newsProcessMethodMap[method];
    if (!newsProcessorClass) {
      throw new Error(` method ${method} not supported`);
    }
    return newsProcessorClass;
  }
}
