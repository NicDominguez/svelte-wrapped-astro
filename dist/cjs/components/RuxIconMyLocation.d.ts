import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMyLocationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMyLocation["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMyLocation["size"];
}
interface RuxIconMyLocationEvents {
}
interface RuxIconMyLocationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMyLocation extends SvelteComponent {
    $$prop_def: RuxIconMyLocationProps;
    $$events_def: RuxIconMyLocationEvents;
    $$slot_def: RuxIconMyLocationSlots;
    $on<K extends keyof RuxIconMyLocationEvents>(type: K, callback: (e: RuxIconMyLocationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMyLocationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMyLocationElement | undefined;
}
export default RuxIconMyLocation;
