export interface Guild {
  guildName: string;
  description: string;
  type: string;
  notificationPreference: string;
  acceptTerms: boolean;
  createdAt: string; // ISO timestamp
}
