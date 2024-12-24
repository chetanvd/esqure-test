import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpHelper } from 'src/common/helpers/http-helper/http-helper';

@Injectable()
export class News2Service {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpHelper,
  ) {}

  async getAllNews(query: any): Promise<any> {
    const apiUrl = `${this.configService.get(`news.${process.env.NEWS_TYPE}`)}/getEvents`;
    const body = {
      resultType: 'events',
      conceptUri: 'http://en.wikipedia.org/wiki/Barack_Obama',
      eventsPage: query.page || 1,
      eventsCount: query.limit || 50,
      eventsSortBy: 'rel',
      eventsSortByAsc: false,
      eventsArticleBodyLen: -1,
      apiKey: this.configService.get('apikey'),
      forceMaxDataTimeWindow: 31,
    };
    const response: any = await this.httpService.post(apiUrl, body);
    return response;
  }

  async getNewsByUri(eventUri: string): Promise<any> {
    const apiUrl = `${this.configService.get(`news.${process.env.NEWS_TYPE}`)}/getEvent`;
    const body = {
      eventUri: eventUri,
      resultType: 'articles',
      articlesPage: 1,
      articlesCount: 100,
      articlesLang: ['eng', 'deu', 'zho', 'slv', 'spa'],
      articlesSortBy: 'cosSim',
      articlesSortByAsc: false,
      articlesArticleBodyLen: -1,
      apiKey: this.configService.get('apikey'),
    };
    const response = await this.httpService.post(apiUrl, body);
    return response;
  }
}
