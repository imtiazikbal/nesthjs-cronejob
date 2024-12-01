/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';


@Injectable()
export class AppService {

  @Cron('33 21 * * *') 
  async processScheduledTasks() {
    console.log('Executing task at:', new Date());
  }
}
