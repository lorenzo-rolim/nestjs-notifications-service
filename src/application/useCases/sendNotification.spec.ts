import { inMemoryNotificationsRepository } from '../../../test/repositories/inMemoryNotificationsRepository';
import { SendNotification } from './sendNotification';

describe('Send notifications', () => {
  it('Should be able to send notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Você recebeu uma nova notificação',
      recipientId: 'test-recipient-id',
    });

    console.log(notificationsRepository.notifications);
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
