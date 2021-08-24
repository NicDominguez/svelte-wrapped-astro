import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPersonAddProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPersonAdd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPersonAdd["size"];
}
interface RuxIconPersonAddEvents {
}
interface RuxIconPersonAddSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPersonAdd extends SvelteComponent {
    $$prop_def: RuxIconPersonAddProps;
    $$events_def: RuxIconPersonAddEvents;
    $$slot_def: RuxIconPersonAddSlots;
    $on<K extends keyof RuxIconPersonAddEvents>(type: K, callback: (e: RuxIconPersonAddEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPersonAddProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPersonAddElement | undefined;
}
export default RuxIconPersonAdd;
