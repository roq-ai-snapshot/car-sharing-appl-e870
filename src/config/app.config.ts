interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read car information', 'Create bookings', 'Create reviews', 'Create reports'],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage car data', 'Manage booking data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/fa967e75-ea37-45ba-9d03-ccd0bc24cc7e',
};
