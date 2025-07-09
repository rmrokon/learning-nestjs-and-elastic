import { Injectable } from '@nestjs/common';
import { MyLogger } from 'src/logger/logger.service';

@Injectable()
export class StatusService {
  constructor(private readonly logger: MyLogger) {}

  getStatus() {
    this.logger.log('Status OK');
    return { success: true };
  }
}
