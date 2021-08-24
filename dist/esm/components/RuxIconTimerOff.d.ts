import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTimerOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTimerOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTimerOff["size"];
}
interface RuxIconTimerOffEvents {
}
interface RuxIconTimerOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTimerOff extends SvelteComponent {
    $$prop_def: RuxIconTimerOffProps;
    $$events_def: RuxIconTimerOffEvents;
    $$slot_def: RuxIconTimerOffSlots;
    $on<K extends keyof RuxIconTimerOffEvents>(type: K, callback: (e: RuxIconTimerOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTimerOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTimerOffElement | undefined;
}
export default RuxIconTimerOff;
