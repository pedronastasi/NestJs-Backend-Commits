import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller('api')
export class ApiController {

    @Get()
    async getCommits(){
        await axios.get("")
        return "api"
    }
}
