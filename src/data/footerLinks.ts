import IconTelegram from '@/components/icons/social/IconTelegram.vue';
import IconVkontakte from '@/components/icons/social/IconVkontakte.vue';
import IconWhatsup from '@/components/icons/social/IconWhatsup.vue';
import IconYoutube from '@/components/icons/social/IconYoutube.vue';
import type { FooterLinksGroup } from '@/components/the-footer/types';

export const footerLinks: FooterLinksGroup[] = [
  {
    title: 'About',
    links: [
      {
        title: 'About Us',
        href: '#',
      },
      {
        title: 'Demos',
        href: '#',
      },
      {
        title: 'Features',
        href: '#',
      },
      {
        title: 'Priceng',
        href: '#',
      },
      {
        title: 'Contacts',
        href: '#',
      },
    ],
  },

  {
    title: 'Help',
    links: [
      {
        title: 'Support',
        href: '#',
      },
      {
        title: 'Complaints',
        href: '#',
      },
      {
        title: 'FAQs',
        href: '#',
      },
      {
        title: 'Fees',
        href: '#',
      },
      {
        title: 'Bug Bounty',
        href: '#',
      },
      {
        title: 'API',
        href: '#',
      },
      {
        title: 'Tax Reporting',
        href: '#',
      },
    ],
  },

  {
    title: 'Follow',
    links: [
      {
        title: 'Telegram',
        icon: IconTelegram,
        href: '#',
      },
      {
        title: 'VKontankte',
        icon: IconVkontakte,
        href: '#',
      },
      {
        title: 'WhatsApp',
        icon: IconWhatsup,
        href: '#',
      },
      {
        title: 'Youtube',
        icon: IconYoutube,
        href: '#',
      },
    ],
  },
];
