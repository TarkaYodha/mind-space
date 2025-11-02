'use client'

import { NavBar } from '@/components/layout/navbar'
import { DietPlannerInterface } from '@/components/tools/diet-planner'

export default function DietPlannerPage() {
  return (
    <>
      <NavBar currentPage="tools" />
      <div className="py-8">
        <DietPlannerInterface />
      </div>
    </>
  )
}
