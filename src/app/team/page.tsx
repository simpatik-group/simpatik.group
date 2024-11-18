import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Team from '@/components/pages/Team/Team';

import { EColor } from '@/interfaces/enums';

import localizationService from '@/services/localization.service';

export default async function ContactsPage() {
  const localization = await localizationService.getLocalizations('uk', [
    'COMMON',
    'TEAM',
  ]);

  return (
    <RootLayout localization={localization} themeColor={EColor.dark}>
      <Team />
    </RootLayout>
  );
}
