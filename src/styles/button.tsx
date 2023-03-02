import type { PropsWithChildren } from 'react'
import React from 'react'
import type { TouchableOpacityProps } from 'react-native'
import type { ThemeProps } from 'styled-components'
import styled from 'styled-components'
import { ContentText } from './text'
import type { Theme } from '@/theme'

type BaseButtonProps = ThemeProps<Theme> & {
  type: 'link' | 'filled' | 'outline'
  rounded: boolean
  noPadding: boolean
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
    <ContentText color={'#FFFFFF70'} case="uppercase">
      {children}
    </ContentText>
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
