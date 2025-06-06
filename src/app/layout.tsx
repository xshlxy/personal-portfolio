import "../styles/globals.css";
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { basePath } from '../utils/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ashley Oliveira | Software Engineer & Data Scientist',
  description: 'Portfolio of Ashley Oliveira, a Software Engineer and Data Scientist specializing in full-stack development, machine learning, and economics.',
  keywords: [
    'Ashley Oliveira',
    'Software Engineer',
    'Data Scientist',
    'Full Stack Developer',
    'Machine Learning',
    'React',
    'Python',
    'TypeScript',
    'AWS',
    'Cloud Computing',
    'Portfolio',
    'Web Development',
    'AI/ML',
    'Computer Science',
    'Economics'
  ].join(', '),
  authors: [{ name: 'Ashley Oliveira' }],
  creator: 'Ashley Oliveira',
  publisher: 'Ashley Oliveira',
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico` },
      { url: `${basePath}/favicon.ico`, type: 'image/x-icon' }
    ],
    apple: [
      { url: `${basePath}/favicon.ico` },
      { url: `${basePath}/favicon.ico`, type: 'image/x-icon' }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xshlxy.github.io/personal-portfolio',
    title: 'Ashley Oliveira | Software Engineer & Data Scientist',
    description: 'Portfolio of Ashley Oliveira, a Software Engineer and Data Scientist specializing in full-stack development, machine learning, and economics.',
    siteName: 'Ashley Oliveira Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashley Oliveira | Software Engineer & Data Scientist',
    description: 'Portfolio of Ashley Oliveira, a Software Engineer and Data Scientist specializing in full-stack development, machine learning, and economics.',
    creator: '@ashleyoliveira',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'oo6WuiDWoHhDHkR9PT3gp4c04oasdnL1tkXwrauKRTo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://xshlxy.github.io/personal-portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e6a8d7" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
