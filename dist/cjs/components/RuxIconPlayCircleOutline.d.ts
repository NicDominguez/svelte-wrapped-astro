import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPlayCircleOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPlayCircleOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPlayCircleOutline["size"];
}
interface RuxIconPlayCircleOutlineEvents {
}
interface RuxIconPlayCircleOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPlayCircleOutline extends SvelteComponent {
    $$prop_def: RuxIconPlayCircleOutlineProps;
    $$events_def: RuxIconPlayCircleOutlineEvents;
    $$slot_def: RuxIconPlayCircleOutlineSlots;
    $on<K extends keyof RuxIconPlayCircleOutlineEvents>(type: K, callback: (e: RuxIconPlayCircleOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPlayCircleOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPlayCircleOutlineElement | undefined;
}
export default RuxIconPlayCircleOutline;
