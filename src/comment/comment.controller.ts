import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(
      createCommentDto.postId,
      createCommentDto.authorId,
      createCommentDto.content,
    );
  }

  @Get('post/:postId')
  findAllByPost(@Param('postId') postId: string) {
    return this.commentService.findAllByPost(postId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentService.update(
      id,
      updateCommentDto.authorId,
      updateCommentDto.content,
    );
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Body('authorId') authorId: string,
  ) {
    return this.commentService.remove(id, authorId);
  }
}