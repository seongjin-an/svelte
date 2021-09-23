import {action} from "@storybook/addon-actions";
import Checklist from '../Packing/CheckList.svelte'
import StyleWrapper from './StyleWrapper.svelte'
import {Template} from "@storybook/addon-svelte-csf";

export default {title: 'Checklist'}
export const basic = () => ({
    Component: StyleWrapper,
    props: {
        component: Checklist,
        style: `
            background-color: cornflowerblue;
            color: white;
            height: 100vh;
            padding: 1rem;
        `
    },
    on: {logout: action('loggout dispatched')},
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' }
        }
    }
})
