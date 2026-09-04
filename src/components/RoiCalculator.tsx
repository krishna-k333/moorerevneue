import React, { useState, useMemo } from "react";
import { Calculator, TrendingUp, Clock, IndianRupee, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export const RoiCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(8);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(12);
  const [monthlySalary, setMonthlySalary] = useState<number>(35000);

  // Computations
  const calculations = useMemo(() => {
    const totalWeeklyHours = teamSize * hoursPerWeek;
    const totalAnnualHours = totalWeeklyHours * 50; // 50 working weeks

    // Hourly cost per employee: monthlySalary / (4.33 weeks * 40 hours) approx 173 hours
    const hourlyCost = monthlySalary / 170;
    const annualWastedCost = totalAnnualHours * hourlyCost;

    // AI replaces approx 75% of repetitive task burden
    const annualSavedCost = annualWastedCost * 0.75;
    const hoursSavedAnnually = Math.round(totalAnnualHours * 0.75);

    return {
      totalAnnualHours,
      annualWastedCost: Math.round(annualWastedCost),
      annualSavedCost: Math.round(annualSavedCost),
      hoursSavedAnnually,
    };
  }, [teamSize, hoursPerWeek, monthlySalary]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const scrollToAudit = () => {
    const el = document.getElementById("audit-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="roi-calculator" className="py-24 bg-white relative overflow-hidden border-y border-slate-200">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00dc82]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-50 text-[#059669] text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Interactive ROI Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            See Exactly How Much You Save With AI Automation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Adjust the sliders below to match your company's team size and manual task load in Faridabad or Delhi NCR.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Sliders Column */}
            <div className="lg:col-span-7 space-y-7">
              {/* Slider 1: Team Size */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-800">Team Size Doing Repetitive Tasks</span>
                  <span className="text-[#059669] font-mono text-base font-bold bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                    {teamSize} People
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#059669]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                  <span>1 person</span>
                  <span>25 people</span>
                  <span>50 people</span>
                </div>
              </div>

              {/* Slider 2: Weekly Hours Wasted Per Person */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-800">Hours Lost Weekly Per Employee</span>
                  <span className="text-[#059669] font-mono text-base font-bold bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                    {hoursPerWeek} Hours / Wk
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="30"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#059669]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                  <span>3 hrs (calling/emails)</span>
                  <span>15 hrs (data entry/CRM)</span>
                  <span>30 hrs (bottlenecked)</span>
                </div>
              </div>

              {/* Slider 3: Average Monthly Salary */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-800">Avg. Monthly Salary Per Employee (₹)</span>
                  <span className="text-[#059669] font-mono text-base font-bold bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                    {formatCurrency(monthlySalary)} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="120000"
                  step="2500"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#059669]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                  <span>₹15,000</span>
                  <span>₹60,000</span>
                  <span>₹1,20,000+</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
                <ShieldCheck className="w-5 h-5 text-[#059669] shrink-0" />
                <span>
                  Estimated based on typical hours saved on repetitive inquiries, scheduling, and manual coordination.
                </span>
              </div>
            </div>

            {/* Results Display Column */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-emerald-50/80 to-slate-50 border border-emerald-200 p-6 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-200">
                  <span className="text-xs font-mono text-slate-600 uppercase font-semibold">Estimated Annual Impact</span>
                  <span className="flex items-center gap-1 text-[11px] text-[#059669] bg-emerald-100/70 px-2.5 py-1 rounded-full font-bold">
                    <TrendingUp className="w-3 h-3" />
                    Estimated Time Saved
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-600 block mb-1 font-medium">Projected Annual Cost Reclaimed:</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#059669] tracking-tight">
                    {formatCurrency(calculations.annualSavedCost)}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Calculated from hours saved across your team.
                  </span>
                </div>

                <div className="pt-2 border-t border-emerald-200 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#059669]" />
                      Hours Reclaimed
                    </div>
                    <div className="text-xl font-bold text-slate-900 font-mono">
                      {calculations.hoursSavedAnnually.toLocaleString()} hrs
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-1 font-medium">
                      <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />
                      Payback Period
                    </div>
                    <div className="text-xl font-bold text-slate-900 font-mono">
                      Fast Payback
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToAudit}
                className="w-full py-3.5 px-4 text-sm font-bold text-black bg-[#00dc82] hover:bg-[#05df85] rounded-xl shadow-[0_4px_16px_rgba(0,220,130,0.3)] hover:shadow-[0_6px_24px_rgba(0,220,130,0.5)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Discuss Your Workflow</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
