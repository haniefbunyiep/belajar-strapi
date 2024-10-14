import type { Schema, Attribute } from '@strapi/strapi';

export interface LandingPageRoleSection extends Schema.Component {
  collectionName: 'components_landing_page_role_sections';
  info: {
    displayName: 'Role Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    roleCards: Attribute.Component<'cards.role-card', true> &
      Attribute.Required;
  };
}

export interface LandingPageLangkahSection extends Schema.Component {
  collectionName: 'components_landing_page_langkah_sections';
  info: {
    displayName: 'Langkah Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    langkahList: Attribute.Component<'components.list', true> &
      Attribute.Required;
  };
}

export interface LandingPageHeroSection extends Schema.Component {
  collectionName: 'components_landing_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    downloadBtn: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LandingPageBenefitSection extends Schema.Component {
  collectionName: 'components_landing_page_benefit_sections';
  info: {
    displayName: 'Benefit Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    benefitCard: Attribute.Component<'cards.benefit-card', true> &
      Attribute.Required;
  };
}

export interface ComponentsPhill extends Schema.Component {
  collectionName: 'components_components_phills';
  info: {
    displayName: 'Phill';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsList extends Schema.Component {
  collectionName: 'components_components_lists';
  info: {
    displayName: 'Langkah List';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CardsRoleCard extends Schema.Component {
  collectionName: 'components_components_role_cards';
  info: {
    displayName: 'Role Card';
    description: '';
  };
  attributes: {
    icons: Attribute.Media<'images', true> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    roles: Attribute.Component<'components.phill', true>;
  };
}

export interface CardsBenefitCard extends Schema.Component {
  collectionName: 'components_cards_benefit_cards';
  info: {
    displayName: 'Benefit Card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'landing-page.role-section': LandingPageRoleSection;
      'landing-page.langkah-section': LandingPageLangkahSection;
      'landing-page.hero-section': LandingPageHeroSection;
      'landing-page.benefit-section': LandingPageBenefitSection;
      'components.phill': ComponentsPhill;
      'components.list': ComponentsList;
      'cards.role-card': CardsRoleCard;
      'cards.benefit-card': CardsBenefitCard;
    }
  }
}
