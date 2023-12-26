import { Logo, NavbarTwoColumns, Section } from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              src="/assets/images/hutao1.png"
              alt="logo"
              className="mr-1 h-20 w-20"
            />
          }
          name="Jorou"
        />
      </a>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
