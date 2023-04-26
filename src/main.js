import { createApp } from 'vue'
import './style.css'
import App from './App.vue'



import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill,IoBriefcaseOutline,BiFileEarmarkCheck,IoGameController,IoChatbubbleOutline,BiCodeSlash,IoDiamondOutline,RiFileUserLine } from "oh-vue-icons/icons";


addIcons(FaFlag, RiZhihuFill,IoBriefcaseOutline,BiFileEarmarkCheck,IoGameController,IoChatbubbleOutline,BiCodeSlash,IoDiamondOutline,RiFileUserLine);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount("#app");


/* createApp(App).mount('#app') */
