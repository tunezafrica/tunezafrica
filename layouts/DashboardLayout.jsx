import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import DashboardNavbar from "../components/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import { Store } from "../Context/Store";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router=useRouter()

  const { state } = useContext(Store);
  const { tunezUserInfo } = state;

  useEffect(() => {
    if (!tunezUserInfo) {
      router.push("/admin/login?redirect=/admin/dashboard");
    }
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex overflow-hidden bg-gray-100">
        <div className="h-full sticky top-0 left-0">
          <DashboardSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
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
  );
}

export default DashboardLayout;
