import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import App from './App.vue'
import { Button, InputNumber, Card, List } from 'ant-design-vue';

const app = createApp(App)
app.use(InputNumber);
app.use(Button);
app.use(Card);
app.use(List);

app.mount('#app')
