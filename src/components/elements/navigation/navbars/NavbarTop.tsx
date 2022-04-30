import { animations, AnimationWrapper } from "components";
import { useSidebar } from "context";
import { UserType } from "types";

interface Props {
  user: UserType;
}

export const NavbarTop = ({ user }: Props) => {
  const { setisSidebarOpen } = useSidebar();

  return (
    <div className="flex sticky top-0 z-50 items-center py-12 mb-3 w-full h-16 bg-slate-50">
      <div className="flex flex-1 justify-between items-center px-4">
        <p className="text-2xl font-semibold text-gray-800">Title</p>
        <AnimationWrapper variants={animations.rotate360} keyIndex="nt-user-icon">
          <div
            role="button"
            tabIndex={0}
            className="flex flex-row items-center cursor-pointer"
            onClick={() => setisSidebarOpen(() => true)}
          >
            {user.avatar ? (
              <img className="w-5 h-5" alt="default pic" src={user.avatar} />
            ) : (
              <img className="w-14 h-14" alt="user" src={`/general/avatar.svg`} />
            )}
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};
