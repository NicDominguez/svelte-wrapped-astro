import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSwapCallsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSwapCalls["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSwapCalls["size"];
}
interface RuxIconSwapCallsEvents {
}
interface RuxIconSwapCallsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSwapCalls extends SvelteComponent {
    $$prop_def: RuxIconSwapCallsProps;
    $$events_def: RuxIconSwapCallsEvents;
    $$slot_def: RuxIconSwapCallsSlots;
    $on<K extends keyof RuxIconSwapCallsEvents>(type: K, callback: (e: RuxIconSwapCallsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSwapCallsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSwapCallsElement | undefined;
}
export default RuxIconSwapCalls;
