import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilterDramaProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilterDrama["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilterDrama["size"];
}
interface RuxIconFilterDramaEvents {
}
interface RuxIconFilterDramaSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilterDrama extends SvelteComponent {
    $$prop_def: RuxIconFilterDramaProps;
    $$events_def: RuxIconFilterDramaEvents;
    $$slot_def: RuxIconFilterDramaSlots;
    $on<K extends keyof RuxIconFilterDramaEvents>(type: K, callback: (e: RuxIconFilterDramaEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilterDramaProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilterDramaElement | undefined;
}
export default RuxIconFilterDrama;
