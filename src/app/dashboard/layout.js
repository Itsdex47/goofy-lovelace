import { ThemeProvider } from 'next-themes';
import { Sidebar } from '@/components/ui/sidebar';
import { TopBar } from '@/components/ui/topbar';

export const metadata = {
  title: 'Dashboard – Open Searchable',
  description: 'Analytics dashboard for AI SEO visibility',
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head />
      <body className="flex min-h-screen bg-background text-foreground">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopBar />
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
