import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilterHdrProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilterHdr["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilterHdr["size"];
}
interface RuxIconFilterHdrEvents {
}
interface RuxIconFilterHdrSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilterHdr extends SvelteComponent {
    $$prop_def: RuxIconFilterHdrProps;
    $$events_def: RuxIconFilterHdrEvents;
    $$slot_def: RuxIconFilterHdrSlots;
    $on<K extends keyof RuxIconFilterHdrEvents>(type: K, callback: (e: RuxIconFilterHdrEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilterHdrProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilterHdrElement | undefined;
}
export default RuxIconFilterHdr;
