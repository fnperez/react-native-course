import React from 'react'
import { Title } from '../../styles/text'
import { Container, SafeContainer } from '../../styles/wrapper'
import useHome from '../../presenters/Home/useHome'
import { FlatList, RefreshControl } from 'react-native'
import { Todo } from '../../services/todos/types'

const Home = () => {
  const presenter = useHome()
  console.log("myTodos ", presenter) 

  const renderItem = ({ item: todo }: { item: Todo }) => (
    <Title>{todo.title}</Title>
  )
  
  return (
    <SafeContainer>
      <Container>
        <FlatList 
          data={presenter.todos}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              onRefresh={presenter.onRefresh}
              refreshing={presenter.isLoading}
              tintColor='#FFFFFF'
            />
          }
        />
      </Container>
    </SafeContainer>
  )
}

export default Home
