import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVideocamOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVideocamOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVideocamOff["size"];
}
interface RuxIconVideocamOffEvents {
}
interface RuxIconVideocamOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVideocamOff extends SvelteComponent {
    $$prop_def: RuxIconVideocamOffProps;
    $$events_def: RuxIconVideocamOffEvents;
    $$slot_def: RuxIconVideocamOffSlots;
    $on<K extends keyof RuxIconVideocamOffEvents>(type: K, callback: (e: RuxIconVideocamOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVideocamOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVideocamOffElement | undefined;
}
export default RuxIconVideocamOff;
