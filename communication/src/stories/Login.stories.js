import StyleWrapper from './StyleWrapper.svelte'
import Login from '../Packing/Login.svelte'
import {action} from "@storybook/addon-actions";

export default {title: 'Login'}
export const basic = () => {
    return{
        Component: StyleWrapper,
        props:{
            component: Login,
            style: `
                background-color: cornflowerblue;
                height: 100vh;
                padding: 1rem;
            `
        },
        on: {login: action('login dispatched')}
    }
}