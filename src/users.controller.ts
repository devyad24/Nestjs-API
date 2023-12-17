import { Controller, Get, Req, Post, Delete, Put, HttpCode, Param, Body, Query } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController{
    @Post()
    @HttpCode(204)
    async create(@Body() createUserDto: CreateUserDto) {
        return 'This action adds a new user';
    }

    @Get()
    findAll(@Query() query: any) {
        return `This action returns all users (limit: ${query.limit} items`;
    }

    @Get(':id')
    @HttpCode(200)
    findOne(@Param() params: any, @Req() request: Request): string{
        console.log(`User ${params.id} is found`);
        return 'This action returns all users';
    }

    @Delete(':id')
    @HttpCode(200)
    deleteOne(@Param() params: any): string {
        console.log(params.id);
        return `This action deletes the user${params.id}`;
    }

    @Put(':id')
    @HttpCode(200)
    update(@Param() params: any): string {
        console.log(params.id);
        return `This action updates the user${params.id}`;
    }
}