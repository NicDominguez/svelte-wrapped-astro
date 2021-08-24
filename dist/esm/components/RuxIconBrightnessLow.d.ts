import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightnessLowProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightnessLow["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightnessLow["size"];
}
interface RuxIconBrightnessLowEvents {
}
interface RuxIconBrightnessLowSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightnessLow extends SvelteComponent {
    $$prop_def: RuxIconBrightnessLowProps;
    $$events_def: RuxIconBrightnessLowEvents;
    $$slot_def: RuxIconBrightnessLowSlots;
    $on<K extends keyof RuxIconBrightnessLowEvents>(type: K, callback: (e: RuxIconBrightnessLowEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightnessLowProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightnessLowElement | undefined;
}
export default RuxIconBrightnessLow;
