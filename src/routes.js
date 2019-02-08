import tasks from './components/Tasks.vue';
import users from './components/Users.vue';

const routes = [{
    path: '/app/v1/tasks',
    component: tasks,
    name: 'tasks',
  },
  {
    path: '/app/v1/users',
    component: users,
    name: 'users',
  },
];

export default routes;
