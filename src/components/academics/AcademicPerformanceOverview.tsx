import React from 'react';
import { 
  TrendingUp, 
  Award, 
  AlertCircle, 
  CheckCircle, 
  BarChart3, 
  Layers, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { 
  GRADE_PERFORMANCE_METRICS, 
  MONTHLY_ACADEMIC_TRENDS, 
  ACADEMIC_SCORE_DISTRIBUTION,
  SUBJECT_ANALYTICS_DATA,
  ACADEMIC_HEADER_STATS
} from '../../data/academicData';

interface AcademicPerformanceOverviewProps {
  onSelectSubject?: (subjectId: string) => void;
  onNavigateTab: (tabKey: string) => void;
}

export const AcademicPerformanceOverview: React.FC<AcademicPerformanceOverviewProps> = ({
  onSelectSubject,
  onNavigateTab
}) => {
  const topSubjects = [...SUBJECT_ANALYTICS_DATA]
    .sort((a, b) => b.averageScore - a.averageScore)
    .slice(0, 4);

  const attentionSubjects = [...SUBJECT_ANALYTICS_DATA]
    .sort((a, b) => a.averageScore - b.averageScore)
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Top Banner KPI summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Overall School Average</span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
              Target: 80%
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white">
              {ACADEMIC_HEADER_STATS.averageAcademicScore}%
            </span>
            <span className="text-xs font-semibold text-emerald-600 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +1.4% this term
            </span>
          </div>
          <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
              style={{ width: `${ACADEMIC_HEADER_STATS.averageAcademicScore}%` }} 
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
            <span>Minimum Pass: 40%</span>
            <span>Academy Distinction: 85%</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Overall Pass Rate</span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
              CBSE Benchmark
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white">
              {ACADEMIC_HEADER_STATS.passPercentage}%
            </span>
            <span className="text-xs font-medium text-slate-500">213 of 219 students</span>
          </div>
          <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-blue-600 h-full rounded-full transition-all duration-500" 
              style={{ width: `${ACADEMIC_HEADER_STATS.passPercentage}%` }} 
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
            <span>Target: 98.0%</span>
            <span>Retention: 99.4%</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Top Performing Wing</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900 dark:text-white">Grade 12 (84.6%)</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Highest distinction concentration (38.4%) across Science and Commerce streams.
          </p>
          <button
            id="overview-inspect-classes-btn"
            onClick={() => onNavigateTab('classes')}
            className="mt-3 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View Class Breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Row 2: Grade-wise Comparison & Monthly Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Grade-wise Performance Comparison (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                Grade-Wise Academic Performance Comparison
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Evaluated across continuous formative and term assessments
              </p>
            </div>
            <span className="text-xs font-bold text-slate-400">Target: 80%</span>
          </div>

          <div className="space-y-4">
            {GRADE_PERFORMANCE_METRICS.map((g) => {
              const isAbove80 = g.average >= 80;
              return (
                <div key={g.grade} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{g.grade}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">{g.totalStudents} students</span>
                      <span className="font-bold text-slate-900 dark:text-white text-xs">{g.average}% avg</span>
                      <span className="text-[11px] font-semibold text-emerald-600">{g.passRate}% pass</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden flex">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isAbove80 ? 'bg-blue-600 dark:bg-blue-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${g.average}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span>Grade 12 ranks highest (84.6%), Grade 11 ranks lowest (78.4%)</span>
            <button
              id="overview-filter-classes-btn"
              onClick={() => onNavigateTab('classes')}
              className="font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              Examine Class Rosters →
            </button>
          </div>
        </div>

        {/* Monthly Academic Trend (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                Monthly Academic Trend
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Average score growth across 2026 session</p>
            </div>
          </div>

          <div className="space-y-3">
            {MONTHLY_ACADEMIC_TRENDS.map((m) => (
              <div key={m.month} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 font-bold text-slate-700 dark:text-slate-300">{m.month}</span>
                  <div className="w-24 sm:w-32 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full rounded-full" 
                      style={{ width: `${m.average}%` }} 
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-black text-slate-900 dark:text-white">{m.average}%</span>
                  <span className="text-[11px] text-slate-500">HW: {m.homeworkCompletion}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40 text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-2">
            <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
            <span>Continuous upward trend observed from April (76.2%) to September (81.4%) after introducing smart digital homework tracking.</span>
          </div>
        </div>
      </div>

      {/* Row 3: Score Distribution & Subject Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Pass / Needs Improvement Distribution (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-purple-600" />
            Score & Grade Bracket Distribution
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Distribution of 219 Class 10 students based on latest cumulative scores
          </p>

          <div className="space-y-3.5">
            {ACADEMIC_SCORE_DISTRIBUTION.map((item) => (
              <div key={item.range} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{item.range}</span>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {item.percentage}% ({item.count} students)
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between text-xs">
            <span className="text-slate-600 dark:text-slate-400">Students needing targeted intervention:</span>
            <button
              id="overview-view-attention-btn"
              onClick={() => onNavigateTab('attention')}
              className="font-bold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
            >
              150 Students (&lt;60%) →
            </button>
          </div>
        </div>

        {/* Highest Performing & Attention Required Subjects (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                Subject Performance Highlights
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Top benchmarks and subjects flagged for academic review
              </p>
            </div>
            <button
              id="overview-all-subjects-btn"
              onClick={() => onNavigateTab('subjects')}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              View All 11 Subjects →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Top Subjects Column */}
            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800/40 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Highest Performing Subjects</span>
              </div>
              <div className="space-y-2.5">
                {topSubjects.map((sub) => (
                  <div 
                    key={sub.id} 
                    onClick={() => onSelectSubject?.(sub.id)}
                    className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-emerald-200/60 dark:border-emerald-800/30 flex items-center justify-between text-xs cursor-pointer hover:border-emerald-500 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{sub.subject}</div>
                      <div className="text-[11px] text-slate-500">{sub.teacherName}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-emerald-600 dark:text-emerald-400 text-sm">{sub.averageScore}%</div>
                      <div className="text-[10px] text-slate-400">{sub.passPercentage}% Pass</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requiring Attention Column */}
            <div className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-800/40 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 dark:text-rose-300">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>Subjects Requiring Attention</span>
              </div>
              <div className="space-y-2.5">
                {attentionSubjects.map((sub) => (
                  <div 
                    key={sub.id}
                    onClick={() => onSelectSubject?.(sub.id)}
                    className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-rose-200/60 dark:border-rose-800/30 flex items-center justify-between text-xs cursor-pointer hover:border-rose-500 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{sub.subject}</div>
                      <div className="text-[11px] text-slate-500">{sub.teacherName}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-rose-600 dark:text-rose-400 text-sm">{sub.averageScore}%</div>
                      <div className="text-[10px] text-slate-400">{sub.studentsBelowTarget} below target</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
