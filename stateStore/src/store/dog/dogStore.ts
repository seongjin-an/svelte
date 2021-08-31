import {derived, writable} from "svelte/store";
import type {IDog} from "./dogType";

export const dogStore = writable<IDog[]>()

//상속 스토어
//상속 스토어는 하나 이상의 스토어에서 값을 가져오는 스토러를 의미한다.
// export const bigDogStore = derived(dogStore, store => Object.values(store).filter(dog => dog.size === 'large'))
export const bigDogStore = derived(dogStore, dogStore => Object.values(dogStore).filter(dog => dog.size === 'large'))
