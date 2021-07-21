import React from 'react';
import { FooterContainer, FooterContent } from './FooterElements';

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>Dominik Grudnik &copy; 2021 {t('footer')}</FooterContent>
    </FooterContainer>
  );
};

export default Footer;
