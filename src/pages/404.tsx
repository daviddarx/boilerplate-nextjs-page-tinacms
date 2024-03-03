import Layout from '@/components/layout/Layout';
import translations from '@/content/translations';

export default function Custom404() {
  return (
    <Layout>
      <h1>{translations.errorPage.title}</h1>
    </Layout>
  );
}
