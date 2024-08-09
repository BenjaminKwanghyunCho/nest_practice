import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module'
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { boardRepository } from './board.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [...boardRepository, BoardService]
})
export class BoardModule {}
