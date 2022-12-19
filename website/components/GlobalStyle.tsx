import { defaultFieldStyles } from '@welcome-ui/utils'
import { createGlobalStyle, Theme } from '@xstyled/styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${({ theme }: Theme) => theme.colors['light-900']};
    }

    /* ALGOLIA DOCSEARCH */
    :root {
      --docsearch-modal-shadow: none;
      --docsearch-hit-shadow: none;
      --docsearch-key-shadow: none;
      --docsearch-footer-shadow: none;
      --docsearch-highlight-color: ${({ theme }: Theme) => theme.colors['sub-3']};
      --docsearch-primary-color: ${({ theme }: Theme) => theme.colors['sub-3']};
      --docsearch-logo-color: ${({ theme }: Theme) => theme.colors['dark-100']};
    }

    .DocSearch {
      &-Button {
        margin: 0;
        width: 100%;
        height: 30;
        border-radius: 0;
        padding: 0 sm;
        ${defaultFieldStyles({ size: 'md' })};
        cursor: text;
        font-family: 'Work Sans';

        &:hover,
        &:active,
        &:focus {
          box-shadow: none;
        }

        &-Placeholder {
          ${({ theme }: Theme) => theme.defaultFields.placeholder};
          display: block;
        }

        &-Keys {
          margin-top: xxs;
          display: flex;
        }

        &-Key {
          border-radius: none;
          ${({ theme }: Theme) => theme.tags.default};
          ${({ theme }: Theme) => theme.tags.variants.default};
          background: ${({ theme }: Theme) => theme.tags.variants.default.backgroundColor};
        }
      }
    }

    .DocSearch {
      &-Commands {
        display: none !important;
      }
      &-Search-Icon {
        display: none;
      }
    }
  `
