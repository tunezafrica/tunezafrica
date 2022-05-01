import { useState } from 'react'
import DashboardNavbar from '../components/DashboardNavbar/DashboardNavbar'
import DashboardSidebar from '../components/DashboardSidebar/DashboardSidebar'

function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>

            <div className="relative h-screen flex overflow-hidden bg-gray-100">
                <div className="h-full">
                    <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                </div>

                {/* // the body of the dashboard */}

                <div className="flex-1 overflow-auto focus:outline-none">
                    <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
                        {/* Page header */}
                        <DashboardNavbar setSidebarOpen={setSidebarOpen} />

                        {/* // the rest of the dashboard */}
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
