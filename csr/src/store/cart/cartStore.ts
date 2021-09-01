import {writable} from 'svelte/store'
import type {ICart} from "./cartType";
export const cartStore = writable<ICart[]>([])