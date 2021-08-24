import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderOuterProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderOuter["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderOuter["size"];
}
interface RuxIconBorderOuterEvents {
}
interface RuxIconBorderOuterSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderOuter extends SvelteComponent {
    $$prop_def: RuxIconBorderOuterProps;
    $$events_def: RuxIconBorderOuterEvents;
    $$slot_def: RuxIconBorderOuterSlots;
    $on<K extends keyof RuxIconBorderOuterEvents>(type: K, callback: (e: RuxIconBorderOuterEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderOuterProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderOuterElement | undefined;
}
export default RuxIconBorderOuter;
