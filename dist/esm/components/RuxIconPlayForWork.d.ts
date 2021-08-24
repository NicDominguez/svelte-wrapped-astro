import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPlayForWorkProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPlayForWork["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPlayForWork["size"];
}
interface RuxIconPlayForWorkEvents {
}
interface RuxIconPlayForWorkSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPlayForWork extends SvelteComponent {
    $$prop_def: RuxIconPlayForWorkProps;
    $$events_def: RuxIconPlayForWorkEvents;
    $$slot_def: RuxIconPlayForWorkSlots;
    $on<K extends keyof RuxIconPlayForWorkEvents>(type: K, callback: (e: RuxIconPlayForWorkEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPlayForWorkProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPlayForWorkElement | undefined;
}
export default RuxIconPlayForWork;
