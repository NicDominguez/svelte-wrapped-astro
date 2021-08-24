import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMmsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMms["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMms["size"];
}
interface RuxIconMmsEvents {
}
interface RuxIconMmsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMms extends SvelteComponent {
    $$prop_def: RuxIconMmsProps;
    $$events_def: RuxIconMmsEvents;
    $$slot_def: RuxIconMmsSlots;
    $on<K extends keyof RuxIconMmsEvents>(type: K, callback: (e: RuxIconMmsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMmsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMmsElement | undefined;
}
export default RuxIconMms;
