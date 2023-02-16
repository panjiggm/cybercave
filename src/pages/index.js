import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import Services from 'sections/services';
import Talents from 'sections/talents';
import Faq from 'sections/faq';
import Clients from 'sections/clients';
import Gallery from 'sections/gallery';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Cybercave ID | Kemudahan anda adalah tujuan kami" />
      <Banner />
      <Services />
      <Talents />
      <Clients />
      <Gallery />
      <KeyFeature />
      <Faq />
    </Layout>
  );
}
