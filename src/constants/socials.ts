import type { IContactInfo } from '../types';

export const CONTACT_INFO: IContactInfo[] = [
  {
    icon: '✉',
    label: 'EMAIL',
    value: 'smayur25491@gmail.com',
    href: 'mailto:smayur25491@gmail.com',
    isExternal: false,
  },
  {
    icon: '☎',
    label: 'PHONE',
    value: '+91 8490974326',
    href: 'tel:+918490974326',
    isExternal: false,
  },
  {
    icon: 'in',
    label: 'LINKEDIN',
    value: 'mayur-solanki91',
    href: 'https://www.linkedin.com/in/mayur-solanki91',
    isExternal: true,
  },
  {
    icon: '</\u003e',
    label: 'GITHUB',
    value: 'github.com/devmayurs',
    href: 'https://github.com/devmayurs',
    isExternal: true,
  },
];
