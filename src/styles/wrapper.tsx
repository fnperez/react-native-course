import type { ThemeProps } from 'styled-components'
import styled from 'styled-components'
import type { Theme } from '@/theme'

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: ThemeProps<Theme>) => props.theme.colors.surface};
`

export const Container = styled.View(
  (
    props: ThemeProps<Theme> & {
      center: boolean
      noPadding: boolean
      gap: number
    },
  ) => ({
    flex: 1, 
    ...(props.noPadding
      ? {}
      : {
          paddingHorizontal: props.theme.paddings.container.horizontal,
          paddingVertical: props.theme.paddings.container.vertical,
        }),
    ...(props.center ? { alignItems: 'center' } : {}),
    backgroundColor: props.theme.colors.surface,
    gap: props.gap,
  }),
)

export const BottomContainer = styled.View((props: { gap: number }) => ({
  marginTop: 'auto',
  gap: props.gap,
}))
