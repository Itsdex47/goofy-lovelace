// src/app/dashboard/page.js
"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

// Placeholder data for AEO score (radial chart)
const aeoData = [
  { name: "Score", value: 78 }, // Example score
  { name: "Remaining", value: 22 },
];
const COLORS = ["#3b82f6", "#e5e7eb"]; // primary blue and gray

// Placeholder data for brand mentions over time
const mentionsData = [
  { date: "Jan", mentions: 120 },
  { date: "Feb", mentions: 150 },
  { date: "Mar", mentions: 180 },
  { date: "Apr", mentions: 200 },
  { date: "May", mentions: 230 },
  { date: "Jun", mentions: 260 },
];

export default function DashboardPage() {
  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Global AEO Score */}
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
        <CardHeader>
          <CardTitle className="text-xl font-medium text-white">Global AEO Score</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={aeoData}
                innerRadius={70}
                outerRadius={90}
                startAngle={90}
                endAngle={-270}
                paddingAngle={5}
                dataKey="value"
              >
                {aeoData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Brand Mentions Over Time */}
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
        <CardHeader>
          <CardTitle className="text-xl font-medium text-white">Brand Mentions (Last 6 months)</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mentionsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorMentions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" stroke="white" />
              <YAxis stroke="white" />
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <Tooltip contentStyle={{ backgroundColor: "#111827", border: "none" }} />
              <Area
                type="monotone"
                dataKey="mentions"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorMentions)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    {/* Pipeline Value Estimator */}
    <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-white">Pipeline Value Estimator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-white">Average Deal Size ($)</label>
          <input type="number" className="bg-white/10 text-white rounded p-2 focus:outline-none" placeholder="e.g., 10000" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white">Lead‑to‑Close Rate (%)</label>
          <input type="number" className="bg-white/10 text-white rounded p-2 focus:outline-none" placeholder="e.g., 15" />
        </div>
        <button className="mt-2 px-4 py-2 bg-blue-500/80 text-white rounded hover:bg-blue-600 transition">
          Calculate
        </button>
        {/* Result placeholder */}
        <div className="text-2xl font-bold text-white">Estimated Pipeline: —</div>
      </CardContent>
    </Card>
    </motion.div>
  );
}
