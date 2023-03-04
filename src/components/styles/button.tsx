import React from 'react'
import { ContentText } from './text'
import styled from 'styled-components/native'
import type { PropsWithChildren } from 'react'
import type { ThemeProps } from 'styled-components'
import type { TouchableOpacityProps } from 'react-native'
import type { Theme } from '../../theme'

type BaseButtonProps = ThemeProps<Theme> & {
  type: 'filled' | 'outline' | 'link'
  rounded?: boolean
  noPadding?: boolean
} & TouchableOpacityProps

const BaseButton = styled.TouchableOpacity((props: BaseButtonProps) => {
  const TYPE_HASH = {
    filled: {
      backgroundColor:
        props.theme.colors[props.disabled ? 'primaryLight' : 'primary'],
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor:
        props.theme.colors[props.disabled ? 'primaryLight' : 'primary'],
      borderWidth: 2,
    },
    link: {
      backgroundColor: 'transparent',
    },
  }

  return {
    ...(props.noPadding
      ? {}
      : {
          paddingVertical: props.theme.paddings.button.vertical,
          paddingHorizontal: props.theme.paddings.button.horizontal,
        }),
    ...(props.rounded ? { borderRadius: props.theme.rounding } : {}),
    alignItems: 'center',
    ...TYPE_HASH[props.type],
  }
})

export const Link = ({
  children,
  ...props
}: PropsWithChildren<TouchableOpacityProps>) => (
  <BaseButton type="link" noPadding {...props}>
    <ContentText case="uppercase">{children}</ContentText>
  </BaseButton>
)

export const Filled = ({
  children,
  ...props
}: PropsWithChildren<TouchableOpacityProps>) => (
  <BaseButton type="filled" rounded {...props}>
    <ContentText case="uppercase">{children}</ContentText>
  </BaseButton>
)

export const Outline = ({
  children,
  ...props
}: PropsWithChildren<TouchableOpacityProps>) => (
  <BaseButton type="outline" rounded {...props}>
    <ContentText case="uppercase">{children}</ContentText>
  </BaseButton>
)
