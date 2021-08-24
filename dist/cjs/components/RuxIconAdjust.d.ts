import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAdjustProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAdjust["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAdjust["size"];
}
interface RuxIconAdjustEvents {
}
interface RuxIconAdjustSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAdjust extends SvelteComponent {
    $$prop_def: RuxIconAdjustProps;
    $$events_def: RuxIconAdjustEvents;
    $$slot_def: RuxIconAdjustSlots;
    $on<K extends keyof RuxIconAdjustEvents>(type: K, callback: (e: RuxIconAdjustEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAdjustProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAdjustElement | undefined;
}
export default RuxIconAdjust;
