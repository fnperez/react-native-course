import React from 'react'
import SCREENS from '../../navigation/screens'
import MultiStep from '../../components/MultiStep/MultiStep'
import { ContentText, Title } from '../../styles/text'
import { SafeContainer } from '../../styles/wrapper'
import { Board, Clocks, Tasks } from '../../components/illustrations'

const OnBoarding = ({ navigation }) => (
  <SafeContainer>
    <MultiStep.Container onFinished={() => navigation.push(SCREENS.WELCOME)}>
      <MultiStep.Step gap={32} header={Clocks}>
        <Title>Manage your tasks</Title>
        <ContentText align="center">
          You can easily manage all of your daily tasks in DoMe for free
        </ContentText>
      </MultiStep.Step>

      <MultiStep.Step gap={32} header={Board}>
        <Title>Create daily routine</Title>
        <ContentText align="center">
          In UpTodo you can create your personalized routine to stay productive
        </ContentText>
      </MultiStep.Step>

      <MultiStep.Step gap={32} header={Tasks}>
        <Title>Organize your tasks</Title>
        <ContentText align="center">
          You can organize your daily tasks by adding your tasks into separate
          categories
        </ContentText>
      </MultiStep.Step>
    </MultiStep.Container>
  </SafeContainer>
)

export default OnBoarding
