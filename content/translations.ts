const translations = {
  metaData: {
    title: (pageTitle?: string) =>
      `${pageTitle ? `${pageTitle} – ` : ''}Boilerplate NextJS & TinaCMS`,
    description: 'Boilerplate for Next.js website with TinaCMS',
  },
  errorPage: {
    title: "This page doesn't exist",
  },
};

export default translations;
