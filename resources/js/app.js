import './bootstrap';

import { createApp } from 'vue';
import PostsIndex from './components/Posts/index.vue';

const app = createApp({});

app.component('posts-index', PostsIndex);

app.mount('#app');