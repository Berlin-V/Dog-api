import { Injectable } from '@nestjs/common';
import axios from 'axios'
import { IDog } from './interface';

@Injectable()
export class AppService {
  dog:IDog[]=[]
  
  async getList(data:IDog) {

         const response = await axios.get ('https://dog.ceo/api/breeds/list/all')
         data.breed  = 'a';
           const dataApi = response.data
            this.dog.push(dataApi)
            return this.dog
 }

 
 getData(data:IDog) {
         const breed = data.breed
         console.log(breed)
         let obj ={};
         const key = data.breed
         obj[key] =  this.dog[0].message[breed];
         console.log(obj)
         return obj;
  }

  deleteData(data:IDog) {
	  const breed = data.breed
	  console.log(this.dog[0].message[breed])
		      delete this.dog[0].message[breed];
		      return "deleteDog"
  }
}
