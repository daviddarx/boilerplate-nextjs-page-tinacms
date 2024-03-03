import PageWrapper from '@/components/layout/PageWrapper';
import translations from '@/content/translations';

export default function Custom404() {
  return (
    <PageWrapper>
      <h1>{translations.errorPage.title}</h1>
    </PageWrapper>
  );
}
