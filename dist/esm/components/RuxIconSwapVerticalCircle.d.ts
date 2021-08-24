import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSwapVerticalCircleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSwapVerticalCircle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSwapVerticalCircle["size"];
}
interface RuxIconSwapVerticalCircleEvents {
}
interface RuxIconSwapVerticalCircleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSwapVerticalCircle extends SvelteComponent {
    $$prop_def: RuxIconSwapVerticalCircleProps;
    $$events_def: RuxIconSwapVerticalCircleEvents;
    $$slot_def: RuxIconSwapVerticalCircleSlots;
    $on<K extends keyof RuxIconSwapVerticalCircleEvents>(type: K, callback: (e: RuxIconSwapVerticalCircleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSwapVerticalCircleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSwapVerticalCircleElement | undefined;
}
export default RuxIconSwapVerticalCircle;
