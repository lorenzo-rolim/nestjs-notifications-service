import { inMemoryNotificationsRepository } from '../../../test/repositories/inMemoryNotificationsRepository';
import { CountRecipientNotification } from './countRecipientNotifications';
import { makeNotification } from '@test/factories/notificationFactories';

describe('Count recipient notifications', () => {
  it('Should be able to count recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'teste-uuid' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'teste-uuid' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'teste-uuid-fake' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'teste-uuid',
    });

    expect(count).toEqual(2);
  });
});
