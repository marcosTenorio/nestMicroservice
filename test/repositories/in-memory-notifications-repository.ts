import { Notification } from '@application/entities/notification'
import { NotificationsRepository } from '@application/repositories/notifications-repository'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = []

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    )

    if (!notification) {
      return null
    }

    return notification
  }

  async create(notification: Notification) {
    this.notifications.push(notification)
  }

  async countManyByRecipientId(recipientId: string) {
    return this.notifications.filter((item) => item.recipientId === recipientId)
      .length
  }

  async findManyByRecipientId(recipientId: string) {
    return this.notifications.filter((item) => item.recipientId === recipientId)
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    )

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification
    }
  }
}
