import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({
    message: 'Você deve informar um recipientId para vincular a notificação!',
  })
  @IsUUID()
  recipientId: string;

  @IsNotEmpty({
    message: 'Você deve informar o conteúdo da notificação',
  })
  @Length(5, 240)
  content: string;

  @IsNotEmpty({
    message: 'Você deve informar a categoria da notificação',
  })
  category: string;
}
