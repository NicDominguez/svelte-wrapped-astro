import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHotTubProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHotTub["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHotTub["size"];
}
interface RuxIconHotTubEvents {
}
interface RuxIconHotTubSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHotTub extends SvelteComponent {
    $$prop_def: RuxIconHotTubProps;
    $$events_def: RuxIconHotTubEvents;
    $$slot_def: RuxIconHotTubSlots;
    $on<K extends keyof RuxIconHotTubEvents>(type: K, callback: (e: RuxIconHotTubEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHotTubProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHotTubElement | undefined;
}
export default RuxIconHotTub;
