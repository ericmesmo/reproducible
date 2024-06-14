import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { env } from '@repo/env-config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(env.test); // This will be type checked
    return this.appService.getHello();
  }
}
