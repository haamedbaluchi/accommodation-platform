import localFont from 'next/font/local';

export const yekanBakhFaNum = localFont({
  src: [
    {
      path: './Yekan-Bakh-FaNum-04-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Yekan-Bakh-FaNum-05-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Yekan-Bakh-FaNum-06-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Yekan-Bakh-FaNum-07-Heavy.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Yekan-Bakh-FaNum-08-Fat.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-yekan-bakh-fanum',
  display: 'swap',
});