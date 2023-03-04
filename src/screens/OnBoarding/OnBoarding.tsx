import React from 'react'
import SCREENS from '../../navigation/screen'
import MultiStep from '../../components/MultiStep/MultiStep'
import { ContentText, Title } from '../../components/styles/text'
import { SafeContainer } from '../../components/styles/wrapper'
import { Board, Clocks, Tasks } from '../../components/illustrations'

const OnBoarding = ({ navigation }) => (
  <MultiStep.Container onFinished={() => navigation.push(SCREENS.WELCOME)}>
    <MultiStep.Step gap={32} header={Clocks}>
      <Title>Manage your tasks</Title>
      <ContentText>
        You can easily manage all of your daily tasks in DoMe for free
      </ContentText>
    </MultiStep.Step>

    <MultiStep.Step gap={32} header={Board}>
      <Title>Create daily routine</Title>
      <ContentText>
        In Uptodo you can create your personalized routine to stay productive
      </ContentText>
    </MultiStep.Step>

    <MultiStep.Step gap={32} header={Tasks}>
      <Title>Organize your tasks</Title>
      <ContentText>
        You can organize your daily tasks by adding your tasks into separate
        categories
      </ContentText>
    </MultiStep.Step>
  </MultiStep.Container>
)

export default OnBoarding
