/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BlogEventService } from "../blogEvent.service";
import { BlogEventCreateInput } from "./BlogEventCreateInput";
import { BlogEvent } from "./BlogEvent";
import { BlogEventFindManyArgs } from "./BlogEventFindManyArgs";
import { BlogEventWhereUniqueInput } from "./BlogEventWhereUniqueInput";
import { BlogEventUpdateInput } from "./BlogEventUpdateInput";

export class BlogEventControllerBase {
  constructor(protected readonly service: BlogEventService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BlogEvent })
  async createBlogEvent(
    @common.Body() data: BlogEventCreateInput
  ): Promise<BlogEvent> {
    return await this.service.createBlogEvent({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BlogEvent] })
  @ApiNestedQuery(BlogEventFindManyArgs)
  async blogEvents(@common.Req() request: Request): Promise<BlogEvent[]> {
    const args = plainToClass(BlogEventFindManyArgs, request.query);
    return this.service.blogEvents({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BlogEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async blogEvent(
    @common.Param() params: BlogEventWhereUniqueInput
  ): Promise<BlogEvent | null> {
    const result = await this.service.blogEvent({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BlogEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBlogEvent(
    @common.Param() params: BlogEventWhereUniqueInput,
    @common.Body() data: BlogEventUpdateInput
  ): Promise<BlogEvent | null> {
    try {
      return await this.service.updateBlogEvent({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BlogEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBlogEvent(
    @common.Param() params: BlogEventWhereUniqueInput
  ): Promise<BlogEvent | null> {
    try {
      return await this.service.deleteBlogEvent({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
