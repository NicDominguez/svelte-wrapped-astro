import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInvertColorsOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInvertColorsOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInvertColorsOff["size"];
}
interface RuxIconInvertColorsOffEvents {
}
interface RuxIconInvertColorsOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInvertColorsOff extends SvelteComponent {
    $$prop_def: RuxIconInvertColorsOffProps;
    $$events_def: RuxIconInvertColorsOffEvents;
    $$slot_def: RuxIconInvertColorsOffSlots;
    $on<K extends keyof RuxIconInvertColorsOffEvents>(type: K, callback: (e: RuxIconInvertColorsOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInvertColorsOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInvertColorsOffElement | undefined;
}
export default RuxIconInvertColorsOff;
