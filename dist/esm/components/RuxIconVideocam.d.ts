import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVideocamProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVideocam["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVideocam["size"];
}
interface RuxIconVideocamEvents {
}
interface RuxIconVideocamSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVideocam extends SvelteComponent {
    $$prop_def: RuxIconVideocamProps;
    $$events_def: RuxIconVideocamEvents;
    $$slot_def: RuxIconVideocamSlots;
    $on<K extends keyof RuxIconVideocamEvents>(type: K, callback: (e: RuxIconVideocamEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVideocamProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVideocamElement | undefined;
}
export default RuxIconVideocam;
