import RootLayout from '@/components/layouts/RootLayout/RootLayout';

import { EColor } from '@/interfaces/enums';

const fetchData = async () => {
  const response = await fetch('https://apitest2.megabox.best/api/ua/boxes');
  const data = await response.json();
  return data;
};
const ContactsPage = () => {
  // const data = await fetchData();
  // console.log('data:', data);

  return (
    <RootLayout themeColor={EColor.dark}>
      <div className='font-black text-7xl'>Кар'єра</div>
    </RootLayout>
  );
};

export default ContactsPage;
