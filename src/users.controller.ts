import { Controller, Get, Req, Post, Delete, Put, HttpCode } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController{
    @Post()
    @HttpCode(204)
    create(): string {
        return 'This action adds a new user';
    }

    @Delete()
    @HttpCode(200)
    delete(): string {
        return 'This action deletes the user';
    }

    @Put()
    @HttpCode(200)
    update(): string {
        return 'This action updates the user';
    }

    @Get()
    findAll(@Req() request: Request): string{
        return 'This action returns all users';
    }
}