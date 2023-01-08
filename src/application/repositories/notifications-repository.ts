import { Injectable } from '@nestjs/common'
import { Notification } from '../entities/notification'

@Injectable()
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>
  abstract findById(notificationId: string): Promise<Notification | null>
  abstract countManyByRecipientId(recipientId: string): Promise<number>
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>
  abstract save(notification: Notification): Promise<void>
}
