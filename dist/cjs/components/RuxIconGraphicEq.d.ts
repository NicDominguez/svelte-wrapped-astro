import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGraphicEqProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGraphicEq["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGraphicEq["size"];
}
interface RuxIconGraphicEqEvents {
}
interface RuxIconGraphicEqSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGraphicEq extends SvelteComponent {
    $$prop_def: RuxIconGraphicEqProps;
    $$events_def: RuxIconGraphicEqEvents;
    $$slot_def: RuxIconGraphicEqSlots;
    $on<K extends keyof RuxIconGraphicEqEvents>(type: K, callback: (e: RuxIconGraphicEqEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGraphicEqProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGraphicEqElement | undefined;
}
export default RuxIconGraphicEq;
