import { FC } from "react";
import { Navbar as SharedNavbar } from "@/shared/ui/navbar";
import { Burger } from "./Navbar.Burger";

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <SharedNavbar>
      <SharedNavbar.Base className='bg-background-contranst border-b border-b-border-primary'>
        <SharedNavbar.Container>
          <SharedNavbar.Logo>
            <h1 className='text-xl text-foreground-contranst font-semibold'>
              Collider
            </h1>
          </SharedNavbar.Logo>
          <SharedNavbar.Toggle className='lg:hidden'>
            <Burger />
          </SharedNavbar.Toggle>
          <SharedNavbar.Menu className='max-lg:bg-background-contranst max-lg:pt-4 lg:w-full'>
            <SharedNavbar.Navigation className='flex max-lg:flex-col lg:justify-between'>
              <div className='contents lg:gap-3'>
                <SharedNavbar.Link to='/'>Home</SharedNavbar.Link>
              </div>
              <div className='contents lg:flex lg:gap-3'>
                <SharedNavbar.Link to='/app'>App</SharedNavbar.Link>
              </div>
            </SharedNavbar.Navigation>
          </SharedNavbar.Menu>
        </SharedNavbar.Container>
      </SharedNavbar.Base>
    </SharedNavbar>
  );
};
