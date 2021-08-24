import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAdd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAdd["size"];
}
interface RuxIconAddEvents {
}
interface RuxIconAddSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAdd extends SvelteComponent {
    $$prop_def: RuxIconAddProps;
    $$events_def: RuxIconAddEvents;
    $$slot_def: RuxIconAddSlots;
    $on<K extends keyof RuxIconAddEvents>(type: K, callback: (e: RuxIconAddEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddElement | undefined;
}
export default RuxIconAdd;
