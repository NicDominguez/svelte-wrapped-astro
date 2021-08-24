import { Components } from '@astrouxds/astro-web-components';
interface RuxIconOpacityProps {
    /** The fill color for the icon */
    color?: Components.RuxIconOpacity["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconOpacity["size"];
}
interface RuxIconOpacityEvents {
}
interface RuxIconOpacitySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconOpacity extends SvelteComponent {
    $$prop_def: RuxIconOpacityProps;
    $$events_def: RuxIconOpacityEvents;
    $$slot_def: RuxIconOpacitySlots;
    $on<K extends keyof RuxIconOpacityEvents>(type: K, callback: (e: RuxIconOpacityEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconOpacityProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconOpacityElement | undefined;
}
export default RuxIconOpacity;
