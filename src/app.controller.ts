import { Controller,Body, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IDog } from './interface';

@Controller('dog')
export class AppController {
  constructor(private readonly appService: AppService) {}

@Get('dogs')
 async  getList(@Body() data: IDog){
      const response = await this.appService.getList(data);
     console.log(response)
     return response
    }
 
 @Get('dog-breed')
 getData(@Body() data: IDog) {
          const response = this.appService.getData(data)
          const breed = data.breed
          console.log(breed)
         return response
  }

@Get('delete-dog')
deleteData(@Body() data:IDog) {
	const response = this.appService.deleteData(data)
	return response
}
}
