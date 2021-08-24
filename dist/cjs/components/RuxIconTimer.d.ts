import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTimerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTimer["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTimer["size"];
}
interface RuxIconTimerEvents {
}
interface RuxIconTimerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTimer extends SvelteComponent {
    $$prop_def: RuxIconTimerProps;
    $$events_def: RuxIconTimerEvents;
    $$slot_def: RuxIconTimerSlots;
    $on<K extends keyof RuxIconTimerEvents>(type: K, callback: (e: RuxIconTimerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTimerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTimerElement | undefined;
}
export default RuxIconTimer;
