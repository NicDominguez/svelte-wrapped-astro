import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilterProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter["size"];
}
interface RuxIconFilterEvents {
}
interface RuxIconFilterSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter extends SvelteComponent {
    $$prop_def: RuxIconFilterProps;
    $$events_def: RuxIconFilterEvents;
    $$slot_def: RuxIconFilterSlots;
    $on<K extends keyof RuxIconFilterEvents>(type: K, callback: (e: RuxIconFilterEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilterProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilterElement | undefined;
}
export default RuxIconFilter;
