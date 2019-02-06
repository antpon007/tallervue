import principal from './components/Principal.vue';
import tasks from './components/Tasks.vue';
import users from './components/Users.vue';

const routes = [{
    path: '/',
    component: principal,
    name: 'principal',
  },
  {
    path: '/tasks',
    component: tasks,
    name: 'tasks',
  },
  {
    path: '/users',
    component: users,
    name: 'users',
  },
];

export default routes;
