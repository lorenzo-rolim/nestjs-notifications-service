import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notificationsController';
import { SendNotification } from '../../application/useCases/sendNotification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '@application/useCases/cancelNotification';
import { ReadNotification } from '@application/useCases/readNotification';
import { UnreadNotification } from '@application/useCases/unreadNotification';
import { GetRecipientNotification } from '@application/useCases/getRecipientNotifications';
import { CountRecipientNotification } from '@application/useCases/countRecipientNotifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotification,
    CountRecipientNotification,
  ],
})
export class HttpModule {}
