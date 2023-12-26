import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Transition 3D"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="https://youtube.com"
        img={{
          src: '/assets/images/amv1.png',
          alt: 'Project 3D Animation',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>After Effect</Tags>
          </>
        }
      />
      <Project
        name="Animation 3D"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="https://youtube.com"
        img={{
          src: '/assets/images/amv2.png',
          alt: 'Project 3D Animation',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>After Effect</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
