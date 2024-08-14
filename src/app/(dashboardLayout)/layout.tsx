import SideBar from "@/components/SideBar/SideBar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="grid  min-h-screen">
        <div>
          <SideBar />
        </div>

        <div className="col-span-12 lg:col-span-11 mt-14 md:mt-0">
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
