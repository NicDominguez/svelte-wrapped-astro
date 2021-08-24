import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMicOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMicOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMicOff["size"];
}
interface RuxIconMicOffEvents {
}
interface RuxIconMicOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMicOff extends SvelteComponent {
    $$prop_def: RuxIconMicOffProps;
    $$events_def: RuxIconMicOffEvents;
    $$slot_def: RuxIconMicOffSlots;
    $on<K extends keyof RuxIconMicOffEvents>(type: K, callback: (e: RuxIconMicOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMicOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMicOffElement | undefined;
}
export default RuxIconMicOff;
