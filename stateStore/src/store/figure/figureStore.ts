import {writable} from "svelte/store";
import Point from "./point";
import Line from "./line";

export const pointStore = writable(new Point(0, 0))
export const lineStore = writable(new Line(new Point(0,0), new Point(0,0)))
