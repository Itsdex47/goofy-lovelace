import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer,
} from 'recharts';

// Mock competitor data
const competitors = [
  { name: 'Competitor A', relevance: 80, traffic: 12000, seoScore: 75 },
  { name: 'Competitor B', relevance: 65, traffic: 9000, seoScore: 68 },
  { name: 'Competitor C', relevance: 50, traffic: 7000, seoScore: 55 },
];

// Radar chart data transformation – each metric as a separate key
const radarData = competitors.map((c) => ({
  subject: c.name,
  Relevance: c.relevance,
  Traffic: c.traffic / 200, // scale down for visual balance
  'SEO Score': c.seoScore,
}));

export default function CompetitorBattlecardsPage() {
  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Competitor Table */}
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
        <CardHeader>
          <CardTitle className="text-xl font-medium text-white">Competitor Battlecards</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-white/20">
                <TableHead className="text-white">Competitor</TableHead>
                <TableHead className="text-white text-right">Relevance</TableHead>
                <TableHead className="text-white text-right">Traffic</TableHead>
                <TableHead className="text-white text-right">SEO Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitors.map((c) => (
                <TableRow key={c.name} className="border-white/10 hover:bg-white/10">
                  <TableCell className="font-medium text-white">{c.name}</TableCell>
                  <TableCell className="text-white text-right">{c.relevance}%</TableCell>
                  <TableCell className="text-white text-right">{c.traffic.toLocaleString()}</TableCell>
                  <TableCell className="text-white text-right">{c.seoScore}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Radar Chart */}
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
        <CardHeader>
          <CardTitle className="text-xl font-medium text-white">SEO Metrics Radar</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#ffffff22" />
              <PolarAngleAxis dataKey="subject" stroke="#fff" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#fff" />
              <Radar name="Relevance" dataKey="Relevance" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Radar name="Traffic" dataKey="Traffic" stroke="#34d399" fill="#34d399" fillOpacity={0.6} />
              <Radar name="SEO Score" dataKey="SEO Score" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
              <Legend wrapperStyle={{ color: '#fff' }} />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}
