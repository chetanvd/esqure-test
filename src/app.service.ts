import { Injectable } from '@nestjs/common';
import { NewsFactory } from './common/news-factory/news-factory.service';
import { NewsService } from './modules/news/news.service';
import { ICampaignProcessor } from './common/interfaces/ICampaignProcessor';

@Injectable()
export class AppService {
  constructor(private readonly newsFactory: NewsFactory) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getAllNews(query: any): Promise<any> {
    const newsProcessor: ICampaignProcessor = this.newsFactory.processNews(
      process.env.NEWS_TYPE,
    );
    const response = await newsProcessor.getAllNews(query);
    return response
  }

  async getNewsByUri(eventUri: string): Promise<any> {
    const newsProcessor: ICampaignProcessor = this.newsFactory.processNews(
      process.env.NEWS_TYPE,
    );
    const response = await newsProcessor.getNewsByUri(eventUri);
    return response;
  }
}
