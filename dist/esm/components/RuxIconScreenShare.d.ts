import { Components } from '@astrouxds/astro-web-components';
interface RuxIconScreenShareProps {
    /** The fill color for the icon */
    color?: Components.RuxIconScreenShare["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconScreenShare["size"];
}
interface RuxIconScreenShareEvents {
}
interface RuxIconScreenShareSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconScreenShare extends SvelteComponent {
    $$prop_def: RuxIconScreenShareProps;
    $$events_def: RuxIconScreenShareEvents;
    $$slot_def: RuxIconScreenShareSlots;
    $on<K extends keyof RuxIconScreenShareEvents>(type: K, callback: (e: RuxIconScreenShareEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconScreenShareProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconScreenShareElement | undefined;
}
export default RuxIconScreenShare;
