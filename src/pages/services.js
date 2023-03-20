import Layout from 'components/layout';
import SEO from 'components/seo';
import Hero from 'sections/hero';
import Pentest from 'sections/pentest';
import Webapp from 'sections/webapp';

const Services = () => {
  return (
    <Layout>
      <SEO title="Cybercave ID | Our Services" />
      <Hero heading="Our Services" />
      <Pentest />
      <Webapp />
    </Layout>
  );
};

export default Services;
