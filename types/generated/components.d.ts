import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomCustomField extends Schema.Component {
  collectionName: 'components_custom_custom_fields';
  info: {
    displayName: 'Custom field';
    icon: '';
    description: '';
  };
  attributes: {
    colour: Attribute.String;
    required: Attribute.Boolean;
    option: Attribute.Enumeration<['Red', 'Black', 'White', 'Blue']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'custom.custom-field': CustomCustomField;
    }
  }
}
