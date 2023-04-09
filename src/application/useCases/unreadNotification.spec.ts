import { inMemoryNotificationsRepository } from '../../../test/repositories/inMemoryNotificationsRepository';
import { NotificationNotFound } from './errors/notificationNotFound';
import { makeNotification } from '@test/factories/notificationFactories';
import { UnreadNotification } from './unreadNotification';

describe('Read notifications', () => {
  it('Should be able to read notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({ readAt: new Date() });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({ notificationId: notification.id });

    expect(notificationsRepository.notifications[0].readAt).toEqual(null);
  });

  it('Should not be able to cancel notification when it does not exist', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() =>
      unreadNotification.execute({ notificationId: 'fake-notification-id' }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
