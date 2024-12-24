import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getAllNews(@Query() query: any): any {
    return this.appService.getAllNews(query);
  }

  @Get('/:uri')
  getNewsByUri(@Param('uri') uri: string): any {
    return this.appService.getNewsByUri(uri);
  }
}
