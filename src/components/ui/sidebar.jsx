import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const navItems = [
    { href: '/dashboard', label: 'Overview' },
    { href: '/dashboard/competitors', label: 'Competitors' },
    { href: '/dashboard/audit', label: 'Docs Audit' },
    { href: '/dashboard/content', label: 'Content Studio' },
    { href: '/dashboard/chat', label: 'Growth Chat' },
  ];

  return (
    <aside className="w-64 bg-white/30 dark:bg-black/30 backdrop-blur-xl border-r border-border p-4 flex flex-col">
      <div className="mb-8 text-2xl font-bold text-primary">Open Searchable</div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block rounded-md px-3 py-2 text-sm font-medium hover:bg-foreground/10",
              "text-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
