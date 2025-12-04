import React from 'react';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const textStyles = cva('text', {
  variants: {
    presentation: {
      default: 'text-primary',
      muted: 'text-zinc-500',
    },
  },
  defaultVariants: {
    presentation: 'default',
  },
});

interface TextProps
  extends
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'presentation'>,
    VariantProps<typeof textStyles> {}

const Text: React.FC<TextProps> = ({ className, presentation, ...props }) => (
  <span className={textStyles({ presentation, className })} {...props} />
);

export default function Welcome({ className }: { className?: string }) {
  return (
    <div className={cn('container mx-auto', className)}>
      <h1 className="rounded-2xl border-2 p-4 text-center md:text-4xl">
        <Text>Vite</Text> | <Text presentation="muted">React</Text> |{' '}
        <Text>TS</Text> | <Text presentation="muted">Tailwind</Text>
      </h1>
    </div>
  );
}
