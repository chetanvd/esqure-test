import { Test, TestingModule } from '@nestjs/testing';
import { News2Controller } from './news2.controller';

describe('News2Controller', () => {
  let controller: News2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [News2Controller],
    }).compile();

    controller = module.get<News2Controller>(News2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
