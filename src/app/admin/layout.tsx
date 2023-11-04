import AdminMenu from "@/components/AdminMenu";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-row">
        <div className="h-screen w-[300px] lg:block hidden overflow-y-auto sticky left-0 top-0 h-screen">
          <AdminMenu />
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
