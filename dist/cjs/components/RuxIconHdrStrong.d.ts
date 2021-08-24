import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHdrStrongProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHdrStrong["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHdrStrong["size"];
}
interface RuxIconHdrStrongEvents {
}
interface RuxIconHdrStrongSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHdrStrong extends SvelteComponent {
    $$prop_def: RuxIconHdrStrongProps;
    $$events_def: RuxIconHdrStrongEvents;
    $$slot_def: RuxIconHdrStrongSlots;
    $on<K extends keyof RuxIconHdrStrongEvents>(type: K, callback: (e: RuxIconHdrStrongEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHdrStrongProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHdrStrongElement | undefined;
}
export default RuxIconHdrStrong;
