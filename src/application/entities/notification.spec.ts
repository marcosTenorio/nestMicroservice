import { Content } from './content'
import { Notification } from './notification'

describe('Notification', () => {
  it('should create a notification', () => {
    const notification = new Notification({
      content: new Content('nova solicitacao de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    })

    expect(notification).toBeTruthy()
  })
})
