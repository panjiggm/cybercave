/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Pertanyaan ?',
    contents: (
      <div>
        Get your website ads tests delivered at let collect sample
        from the victory of the managements that supplies best design
        system which guidelines ever with multiple features.
      </div>
    ),
  },
  {
    title: 'Pertanyaan?',
    contents: (
      <div>
        Rhino skin maybe thick but it can be quite sensitive to
        sunburns and insect bites which is why they like wallow so
        much – when the mud dries it acts as protection from the
        sunburns and insects.
      </div>
    ),
  },
  {
    title: `Pertanyaan?`,
    contents: (
      <div>
        Get your blood tests delivered at the home collect a sample
        from management news. Get your blood tests delivered at the
        home collect a sample from management news. Get your blood
        tests delivered at the home collect a sample from management
        news. Get your blood tests delivered at the home.
      </div>
    ),
  },
  {
    title: `Pertanyaan`,
    contents: (
      <div>
        If you’re looking to hunt a unicorn, but don’t know where to
        begin, try Lake Superior State University in Sault Ste. Marie,
        Michigan. Since 1971, the university has issued permits to
        unicorn questers.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Pertanyaan yang sering diajukan"
          slogan="FAQ"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
