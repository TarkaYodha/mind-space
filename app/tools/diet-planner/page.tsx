'use client';

import { DietPlannerInterface } from '@/components/tools/diet-planner';
import { NavBar } from '@/components/layout/navbar';

export default function DietPlannerPage() {
  return (
    <>
      <NavBar currentPage="tools" />
      <div className="py-8">
        <DietPlannerInterface />
      </div>
    </>
  );
}
