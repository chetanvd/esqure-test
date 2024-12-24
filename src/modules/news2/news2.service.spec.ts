import { Test, TestingModule } from '@nestjs/testing';
import { News2Service } from './news2.service';

describe('News2Service', () => {
  let service: News2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [News2Service],
    }).compile();

    service = module.get<News2Service>(News2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
