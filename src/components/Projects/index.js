import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  ProjectList,
  ListItem,
  ListItemTitle,
  Button,
} from './styles';
import { getProjectsRequest } from '~/store/modules/projects/actions';
import { openNewProjectModal } from '~/store/modules/modals/actions';
import NewProject from '../NewProject';

const Projects = () => {
  const dispatch = useDispatch();

  const activeTeam = useSelector(state => state.teams.active);
  const projects = useSelector(state => state.projects.data);

  useEffect(() => {
    if (activeTeam) {
      dispatch(getProjectsRequest());
    }
  }, [activeTeam, dispatch]);

  if (!activeTeam) return null;

  return (
    <Container>
      <ProjectList
        data={projects}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ListItem>
            <ListItemTitle>{item.title}</ListItemTitle>
          </ListItem>
        )}
      />

      <Button onPress={() => dispatch(openNewProjectModal())}>
        <Icon name="add" size={28} color="#fff" />
      </Button>

      <NewProject />
    </Container>
  );
};

export default Projects;
