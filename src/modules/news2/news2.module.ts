import { Module } from '@nestjs/common';
import { News2Controller } from './news2.controller';
import { News2Service } from './news2.service';
import { HttpModule } from '@nestjs/axios';
import { HttpHelper } from 'src/common/helpers/http-helper/http-helper';

@Module({
  imports: [HttpModule],
  controllers: [News2Controller],
  providers: [News2Service, HttpHelper],
  exports: [News2Service]
})
export class News2Module {}
