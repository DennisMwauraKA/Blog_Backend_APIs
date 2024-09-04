import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dtos';
import { PatchPostDto } from './dtos/patch-post.dto';
@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    /*dependecy injection*/
    private readonly postService: PostsService,
  ) {}

  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }
  @ApiOperation({
    summary: 'Creates a new Blog Post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
  }

  @ApiOperation({
    summary: 'Updates an existing Blog post',
  })
  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if the post is updated successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.log(patchPostsDto);
  }
}
