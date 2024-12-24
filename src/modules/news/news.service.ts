import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpHelper } from 'src/common/helpers/http-helper/http-helper';

@Injectable()
export class NewsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpHelper,
  ) {}
  async getAllNews(query: any): Promise<any> {
    const apiUrl = `${this.configService.get(`news.${process.env.NEWS_TYPE}`)}/getArticles`;
    const body = {
      action: 'getArticles',
      keyword: 'Tesla Inc',
      sourceLocationUri: [
        'http://en.wikipedia.org/wiki/United_States',
        'http://en.wikipedia.org/wiki/Canada',
        'http://en.wikipedia.org/wiki/United_Kingdom',
      ],
      ignoreSourceGroupUri: 'paywall/paywalled_sources',
      articlesPage: query.page || 1,
      articlesCount: query.limit || 100,
      articlesSortBy: 'date',
      articlesSortByAsc: false,
      dataType: ['news', 'pr'],
      forceMaxDataTimeWindow: 31,
      resultType: 'articles',
      apiKey: this.configService.get('apikey'),
    };
    const response: any = await this.httpService.post(apiUrl, body);
    return {
      data: response.articles.results,
      meta: {
        totalResults: response.articles.totalResults,
        page: response.articles.page,
        count: response.articles.count,
        pages: response.articles.pages,
      },
    };
    // return response;
  }

  async getNewsByUri(articleUri: string): Promise<any> {
    const apiUrl = `${this.configService.get(`news.${process.env.NEWS_TYPE}`)}/getArticles`;
    const body = {
      action: 'getArticle',
      articleUri: articleUri,
      infoArticleBodyLen: -1,
      resultType: 'articles',
      apiKey: this.configService.get('apikey'),
    };
    const response = await this.httpService.post(apiUrl, body);
    return response;
  }
}
