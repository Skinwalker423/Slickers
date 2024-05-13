import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, User } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='flex items-center justify-center gap-x-3 rounded-full border px-2 py-2 lg:px-4 lg:py-2'>
          <MenuIcon className='w-6 h-6 lg:w-5 lg:h5' />
          <Avatar className='hidden md:block'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <RegisterLink>Register</RegisterLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LoginLink>Log in</LoginLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
