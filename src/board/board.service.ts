import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Board } from 'src/entities/board.entity'
import { UpdateBoardDto } from './dto/update-board.dto';
import { NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {

    constructor(
        @Inject('BOARD_REPOSITORY')
        private boardRepository: Repository<Board>,
    ) {}

    AllBoards(): Promise<Board[]> {
        return this.boardRepository.find({});
    }

    async create(createBoardDto: CreateBoardDto): Promise<Board> {
        const {title, description } = createBoardDto;
        const board = await this.boardRepository.create({
            title,
            description
        });

        await this.boardRepository.save(board);
        return board;
    }

    async update(id: number, updateBoardDto: UpdateBoardDto): Promise<Board> {
        const board = await this.boardRepository.findOne({
        where: {
            id,
            },
        });

        if (!board) {
            throw new NotFoundException('해당 id의 게시글 정보는 존재하지 않습니다.');
        }
        await this.boardRepository.update(id, updateBoardDto);
        const updatedBoard = await this.boardRepository.findOne({
        where: {
            id,
        },
        });
        return updatedBoard;
    }

    async delete(id: number) {
        const result = await this.boardRepository.delete(id);
        if (result.affected === 0) {
        throw new NotFoundException('해당하는 id의 게시글 정보가 없습니다.');
        }
    }

}
