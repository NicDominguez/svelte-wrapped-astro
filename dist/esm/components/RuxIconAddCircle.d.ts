import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddCircleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddCircle["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddCircle["size"];
}
interface RuxIconAddCircleEvents {
}
interface RuxIconAddCircleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddCircle extends SvelteComponent {
    $$prop_def: RuxIconAddCircleProps;
    $$events_def: RuxIconAddCircleEvents;
    $$slot_def: RuxIconAddCircleSlots;
    $on<K extends keyof RuxIconAddCircleEvents>(type: K, callback: (e: RuxIconAddCircleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddCircleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddCircleElement | undefined;
}
export default RuxIconAddCircle;
