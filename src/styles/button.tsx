import type { PropsWithChildren } from 'react'
import React from 'react'
import type { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import type { DefaultProps as TextProps } from './text'
import { ContentText } from './text'

type BaseButtonProps = {
  type?: 'link' | 'filled' | 'outline'
  rounded?: boolean
  noPadding?: boolean
  case?: TextProps['case']
} & TouchableOpacityProps

const BaseButton = styled.TouchableOpacity<BaseButtonProps>(props => {
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
    ...TYPE_HASH[props.type || 'filled'],
  }
})

export const Link = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => (
  <BaseButton type="link" noPadding {...props}>
    <ContentText color="gray" case={props.case || 'uppercase'}>
      {children}
    </ContentText>
  </BaseButton>
)

export const Filled = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => (
  <BaseButton type="filled" rounded {...props}>
    <ContentText case={props.case || 'uppercase'}>{children}</ContentText>
  </BaseButton>
)

export const Outline = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => (
  <BaseButton type="outline" rounded {...props}>
    <ContentText case={props.case || 'uppercase'}>{children}</ContentText>
  </BaseButton>
)
