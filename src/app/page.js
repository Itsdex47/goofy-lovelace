import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold mb-6 text-primary">
        Open Searchable
      </h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        AI‑driven SEO & visibility platform for B2B SaaS. Scan your domain, see competitor battlecards, and estimate pipeline value.
      </p>
      <div className="flex gap-4">
        <Link href="/dashboard" passHref>
          <Button variant="default" asChild>
            <a>Enter Dashboard</a>
          </Button>
        </Link>
        <Link href="https://github.com/searchable" passHref>
          <Button variant="outline" asChild>
            <a>GitHub</a>
          </Button>
        </Link>
      </div>
    </motion.main>
  );
}
