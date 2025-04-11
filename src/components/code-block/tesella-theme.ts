import { PrismTheme } from 'prism-react-renderer';

export const tesellaTheme: PrismTheme = {
  plain: {
    color: '#e6e6e6',
    backgroundColor: '#111111',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#6a9955',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#d1d5db',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['tag', 'operator'],
      style: {
        color: '#03a9f4',
      },
    },
    {
      types: ['number'],
      style: {
        color: '#f08d49',
      },
    },
    {
      types: ['property', 'function'],
      style: {
        color: '#cccccc',
      },
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: '#29b6f6',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#e0e0e0',
      },
    },
    {
      types: [
        'boolean',
        'entity',
        'url',
        'attr-value',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'atrule',
        'placeholder',
        'variable',
      ],
      style: {
        color: '#d1d5db',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#f08d49',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#29b6f6',
      },
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through',
      },
    },
    {
      types: ['inserted'],
      style: {
        textDecorationLine: 'underline',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['important'],
      style: {
        color: '#03a9f4',
      },
    },
  ],
};
