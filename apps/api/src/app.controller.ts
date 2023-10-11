import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('Get')
export class AppController {
  constructor(@Inject('AUTH_SERVICE') private readonly authService: ClientProxy) {}

  @Get('/user')
  async getUser() {
    return this.authService.send(
      {
        cmd: 'get-user',
      },
      {},
    );
  }


}
