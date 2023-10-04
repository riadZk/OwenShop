import React from 'react'
import DashboardStatsGrid from '../../shared/DashboardStatsGrid'

import RecentOrders from '../../shared/RecentOrders'


export default function Home() {
	return (
		<div className="flex flex-col gap-4 w-3/4 mt-6 ml-[280px]">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
			</div>
		</div>
	)
}