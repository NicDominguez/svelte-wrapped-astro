import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderBottomProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderBottom["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderBottom["size"];
}
interface RuxIconBorderBottomEvents {
}
interface RuxIconBorderBottomSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderBottom extends SvelteComponent {
    $$prop_def: RuxIconBorderBottomProps;
    $$events_def: RuxIconBorderBottomEvents;
    $$slot_def: RuxIconBorderBottomSlots;
    $on<K extends keyof RuxIconBorderBottomEvents>(type: K, callback: (e: RuxIconBorderBottomEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderBottomProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderBottomElement | undefined;
}
export default RuxIconBorderBottom;
