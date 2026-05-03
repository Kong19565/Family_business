import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// Mock next/link
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { prefetch, scroll, ...rest } = props as Record<string, unknown>;
    return <a href={href} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>
  },
}))

// Mock next/image
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    // Destructure to avoid passing non-DOM props to img
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, priority, sizes, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...(rest as React.ImgHTMLAttributes<HTMLImageElement>)} alt={(props.alt as string) || ''} />
  },
}))

// Mock framer-motion/motion/react to avoid animation issues in tests
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: { children: React.ReactNode }) => <section {...props}>{children}</section>,
    h2: ({ children, ...props }: { children: React.ReactNode }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: { children: React.ReactNode }) => <h3 {...props}>{children}</h3>,
    h1: ({ children, ...props }: { children: React.ReactNode }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: { children: React.ReactNode }) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: { children: React.ReactNode }) => <span {...props}>{children}</span>,
  },
  fadeInUp: {},
  staggerContainer: {},
}))
