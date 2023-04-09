import { inMemoryNotificationsRepository } from '../../../test/repositories/inMemoryNotificationsRepository';
import { makeNotification } from '@test/factories/notificationFactories';
import { GetRecipientNotification } from './getRecipientNotifications';

describe('Get recipient notifications', () => {
  it('Should be able to get recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotification(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'teste-uuid',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'teste-uuid' }),
        expect.objectContaining({ recipientId: 'teste-uuid' }),
      ]),
    );
  });
});
