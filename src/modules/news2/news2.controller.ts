import { Controller, Get, Param, Query } from '@nestjs/common';
import { News2Service } from './news2.service';

@Controller('news2')
export class News2Controller {
  constructor(private readonly news2Service: News2Service) {}

  @Get()
  getAllEvents(@Query() query: any): any {
    const response = this.news2Service.getAllNews(query);
    return response;
  }

  @Get('/:eventUri')
  getEventByUri(@Param('eventUri') eventUri: string): any {
    const response = this.news2Service.getNewsByUri(eventUri);
    return response;
  }
}
