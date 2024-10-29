import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  notify(
    message: string,
    type: 'success-toast' | 'error-toast' | 'neutral-toast',
    duration?: number
  ) {}
}
