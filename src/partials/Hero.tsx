import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello, I'm <GradientText>Jorou</GradientText> 👋
        </>
      }
      description={
        <>
          a video editor who contributes to several projects such as amv and
          shares daily life about the world of gaming{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.instagram.com/joe.wmr"
          >
            let's be friends 👋
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64 rounded-md"
          src="assets/images/hero.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/insta.png" alt="Instagram" />
          </a>
          <a href="https://youtube.com/@jorou_?si=a01k6uE2qDQzGxr">
            <HeroSocial src="/assets/images/youtube.webp" alt="Youtube icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
