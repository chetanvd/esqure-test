import { Controller, Get, Param, Query } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getAllArticles(@Query() query: any): any {
    const response = this.newsService.getAllNews(query);
    return response
  }

  @Get('/:articleUri')
  getArticleByUri(@Param('articleUri') articleUri: string): any {
    const response = this.newsService.getNewsByUri(articleUri);
    return response
  }
}
