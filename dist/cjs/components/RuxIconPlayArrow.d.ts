import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPlayArrowProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPlayArrow["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPlayArrow["size"];
}
interface RuxIconPlayArrowEvents {
}
interface RuxIconPlayArrowSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPlayArrow extends SvelteComponent {
    $$prop_def: RuxIconPlayArrowProps;
    $$events_def: RuxIconPlayArrowEvents;
    $$slot_def: RuxIconPlayArrowSlots;
    $on<K extends keyof RuxIconPlayArrowEvents>(type: K, callback: (e: RuxIconPlayArrowEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPlayArrowProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPlayArrowElement | undefined;
}
export default RuxIconPlayArrow;
