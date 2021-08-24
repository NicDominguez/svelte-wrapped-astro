import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightnessAutoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightnessAuto["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightnessAuto["size"];
}
interface RuxIconBrightnessAutoEvents {
}
interface RuxIconBrightnessAutoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightnessAuto extends SvelteComponent {
    $$prop_def: RuxIconBrightnessAutoProps;
    $$events_def: RuxIconBrightnessAutoEvents;
    $$slot_def: RuxIconBrightnessAutoSlots;
    $on<K extends keyof RuxIconBrightnessAutoEvents>(type: K, callback: (e: RuxIconBrightnessAutoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightnessAutoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightnessAutoElement | undefined;
}
export default RuxIconBrightnessAuto;
