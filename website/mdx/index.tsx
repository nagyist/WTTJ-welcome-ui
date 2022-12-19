import type { MDXComponents as MDXComponentsProps } from 'mdx/types'

import { H1, H2, H3, H4 } from './Headings'

export const MDXComponents: MDXComponentsProps = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
}
