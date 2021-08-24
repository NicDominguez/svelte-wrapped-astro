import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSwapHorizontalCircleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSwapHorizontalCircle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSwapHorizontalCircle["size"];
}
interface RuxIconSwapHorizontalCircleEvents {
}
interface RuxIconSwapHorizontalCircleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSwapHorizontalCircle extends SvelteComponent {
    $$prop_def: RuxIconSwapHorizontalCircleProps;
    $$events_def: RuxIconSwapHorizontalCircleEvents;
    $$slot_def: RuxIconSwapHorizontalCircleSlots;
    $on<K extends keyof RuxIconSwapHorizontalCircleEvents>(type: K, callback: (e: RuxIconSwapHorizontalCircleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSwapHorizontalCircleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSwapHorizontalCircleElement | undefined;
}
export default RuxIconSwapHorizontalCircle;
