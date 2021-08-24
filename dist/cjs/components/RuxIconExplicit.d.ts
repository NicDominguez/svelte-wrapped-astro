import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExplicitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconExplicit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExplicit["size"];
}
interface RuxIconExplicitEvents {
}
interface RuxIconExplicitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExplicit extends SvelteComponent {
    $$prop_def: RuxIconExplicitProps;
    $$events_def: RuxIconExplicitEvents;
    $$slot_def: RuxIconExplicitSlots;
    $on<K extends keyof RuxIconExplicitEvents>(type: K, callback: (e: RuxIconExplicitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconExplicitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExplicitElement | undefined;
}
export default RuxIconExplicit;
