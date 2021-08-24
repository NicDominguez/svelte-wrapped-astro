import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddLocationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddLocation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddLocation["size"];
}
interface RuxIconAddLocationEvents {
}
interface RuxIconAddLocationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddLocation extends SvelteComponent {
    $$prop_def: RuxIconAddLocationProps;
    $$events_def: RuxIconAddLocationEvents;
    $$slot_def: RuxIconAddLocationSlots;
    $on<K extends keyof RuxIconAddLocationEvents>(type: K, callback: (e: RuxIconAddLocationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddLocationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddLocationElement | undefined;
}
export default RuxIconAddLocation;
