import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMessageProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMessage["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMessage["size"];
}
interface RuxIconMessageEvents {
}
interface RuxIconMessageSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMessage extends SvelteComponent {
    $$prop_def: RuxIconMessageProps;
    $$events_def: RuxIconMessageEvents;
    $$slot_def: RuxIconMessageSlots;
    $on<K extends keyof RuxIconMessageEvents>(type: K, callback: (e: RuxIconMessageEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMessageProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMessageElement | undefined;
}
export default RuxIconMessage;
