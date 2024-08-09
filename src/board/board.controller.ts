import { 
    Controller,
    Get, 
    Patch, 
    Delete, 
    Param, 
    Body, 
    Post
} from '@nestjs/common';
import { BoardService } from './board.service'
import { UpdateBoardDto } from './dto/update-board.dto'
import { Board } from 'src/entities/board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get() 
    getAllBoards(): Promise<Board[]> {
        return this.boardService.AllBoards();
    }

    @Post()
    createBoard(@Body() boardData: CreateBoardDto): Promise<Board> {
        return this.boardService.create(boardData);
    }

    @Patch(':id')
    updateBoard(@Param('id') id: number, @Body() boardData: UpdateBoardDto) {
        return this.boardService.update(id, boardData);
    }    

    @Delete(':id')
    deleteBoard(@Param('id') id: number) {
        return this.boardService.delete(id);
    }    

}
