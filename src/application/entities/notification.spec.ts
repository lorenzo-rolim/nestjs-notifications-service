import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('It should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      content: new Content('content teste'),
      recipientId: 'id',
    });

    expect(notification).toBeTruthy();
  });
});
