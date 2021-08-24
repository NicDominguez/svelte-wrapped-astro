import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInvertColorsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInvertColors["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInvertColors["size"];
}
interface RuxIconInvertColorsEvents {
}
interface RuxIconInvertColorsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInvertColors extends SvelteComponent {
    $$prop_def: RuxIconInvertColorsProps;
    $$events_def: RuxIconInvertColorsEvents;
    $$slot_def: RuxIconInvertColorsSlots;
    $on<K extends keyof RuxIconInvertColorsEvents>(type: K, callback: (e: RuxIconInvertColorsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInvertColorsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInvertColorsElement | undefined;
}
export default RuxIconInvertColors;
