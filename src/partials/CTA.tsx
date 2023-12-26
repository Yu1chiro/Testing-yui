import { Section } from 'astro-boilerplate-components';

const CTA = () => {
  const buttonStyle = {
    backgroundColor: '#22d3ee',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold', // font bold
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // shadow
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const hoverStyle = {
    backgroundColor: '#0077b6', // warna yang diinginkan saat hover
  };

  return (
    <Section>
      <a
        href="mailto:your-email@example.com"
        style={{ ...buttonStyle, ...hoverStyle }}
      >
        Let's Talk Me
      </a>
    </Section>
  );
};

export { CTA };
