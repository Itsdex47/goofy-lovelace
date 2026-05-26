"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between bg-white/30 dark:bg-black/30 backdrop-blur-xl border-b border-border px-4 py-2">
      <Link href="/dashboard" className={cn('text-xl font-semibold text-primary')}>Open Searchable</Link>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
}
