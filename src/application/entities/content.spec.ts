import { Content } from './content';

describe('Notification content', () => {
  it('It should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('It not should be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Você')).toThrow();
  });

  it('It not should be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
