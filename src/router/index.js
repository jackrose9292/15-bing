//导入组件
import Login from '../component/login/login.vue';
import Register from '../component/register/Register.vue'
//该文件对外到处路由配置
export default {
    routes: [{
            name: 'login',
            path: '/login',
            component: Login
        }
    ]
}