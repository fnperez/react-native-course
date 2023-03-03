import styled from 'styled-components/native'

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.surface};
`

export const InnerContainer = styled.View<{
  center?: boolean
  noPadding?: boolean
  gap?: number
  dir?: 'row' | 'column'
}>(props => ({
  ...(props.noPadding
    ? {}
    : {
        paddingHorizontal: props.theme.paddings.container.horizontal,
        paddingVertical: props.theme.paddings.container.vertical,
      }),
  ...(props.center ? { alignItems: 'center', justifyContent: 'center' } : {}),
  backgroundColor: props.theme.colors.surface,
  gap: props.gap,
  flexDirection: props.dir || 'column',
}))

export const Container = styled(InnerContainer)`
  flex: 1;
`

export const BottomContainer = styled(InnerContainer).attrs({
  noPadding: true,
})`
  margin-top: auto;
`
