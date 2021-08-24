import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderColorProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderColor["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderColor["size"];
}
interface RuxIconBorderColorEvents {
}
interface RuxIconBorderColorSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderColor extends SvelteComponent {
    $$prop_def: RuxIconBorderColorProps;
    $$events_def: RuxIconBorderColorEvents;
    $$slot_def: RuxIconBorderColorSlots;
    $on<K extends keyof RuxIconBorderColorEvents>(type: K, callback: (e: RuxIconBorderColorEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderColorProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderColorElement | undefined;
}
export default RuxIconBorderColor;
