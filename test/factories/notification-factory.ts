import { Content } from '@application/entities/content'
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification'

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('new notification'),
    recipientId: 'example-recipient-id',
    ...override,
  })
}
