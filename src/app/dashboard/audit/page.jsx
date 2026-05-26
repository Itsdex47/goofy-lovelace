"use client";
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

// Mock audit results
const auditScore = 84; // out of 100
const criteria = [
  { name: 'Proper Heading Structure', passed: true },
  { name: 'Schema.org JSON‑LD', passed: true },
  { name: 'Markdown Quality', passed: false },
  { name: 'Image Alt Text', passed: true },
  { name: 'Internal Linking', passed: false },
];

export default function DocsAuditPage() {
  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Summary Card */}
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
        <CardHeader>
          <CardTitle className="text-xl font-medium text-white">LLM Docs Audit</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="text-5xl font-bold text-white">{auditScore}%</div>
          <p className="text-white/80">Overall compliance score for AI ingestion</p>
        </CardContent>
      </Card>

      {/* Detailed Checklist */}
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-white">Checklist</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {criteria.map((c) => (
            <div key={c.name} className="flex items-center space-x-2">
              {c.passed ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <XCircle className="w-5 h-5 text-red-400" />
              )}
              <span className="text-white">{c.name}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
