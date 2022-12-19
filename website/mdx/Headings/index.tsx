import { Text, TextProps } from '@welcome-ui/text'

import { slugify } from '../../utils/slugify'

import * as S from './styles'

const Title = ({ children, ...props }: TextProps) => {
  const slug = slugify(children as string)

  return (
    <S.Title id={slug} {...props}>
      {children} <S.Link href={`#${slug}`}>#</S.Link>
    </S.Title>
  )
}

export const H1 = (props: TextProps) => {
  return <Text m="0" pb="md" pt="3xl" variant="h1" {...props} />
}

export const H2 = (props: TextProps) => {
  return <Title pt="3xl" variant="h3" {...props} />
}

export const H3 = (props: TextProps) => {
  return <Title pt="xxl" variant="h5" {...props} />
}

export const H4 = (props: TextProps) => {
  return <Title pt="lg" variant="h5" {...props} />
}
