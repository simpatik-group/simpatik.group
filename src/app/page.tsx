import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Home from '@/components/pages/Home/Home';

import { EColor } from '@/interfaces/enums';

import localizationService from '@/services/localization.service';

// https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration
// генерація метаданих
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   // read route params
//   // const id = (await params).id

//   // fetch data
//   const product = await fetch(
//     process.env.NEXT_PUBLIC_DOMAIN + '/homepage?populate=*&locale=uk',
//   ).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   // const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.data.hero_title + ' | test',
//   };
// }
export const revalidate = 3600; // invalidate every hour

export default async function HomePage() {
  const commonContent = await localizationService.getCommon('uk');
  // const { data: homePage } = await fetch(
  //   process.env.NEXT_PUBLIC_DOMAIN + '/homepage?populate=*&locale=uk',
  //   { cache: 'force-cache' },
  // ).then((res) => res.json());

  const homePage = await localizationService.getHomePage('uk');

  return (
    <RootLayout
      localization={{ homePage, commonContent }}
      themeColor={EColor.dark}
    >
      <Home />
    </RootLayout>
  );
}
