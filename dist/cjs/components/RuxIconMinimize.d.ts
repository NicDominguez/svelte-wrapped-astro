import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMinimizeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMinimize["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMinimize["size"];
}
interface RuxIconMinimizeEvents {
}
interface RuxIconMinimizeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMinimize extends SvelteComponent {
    $$prop_def: RuxIconMinimizeProps;
    $$events_def: RuxIconMinimizeEvents;
    $$slot_def: RuxIconMinimizeSlots;
    $on<K extends keyof RuxIconMinimizeEvents>(type: K, callback: (e: RuxIconMinimizeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMinimizeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMinimizeElement | undefined;
}
export default RuxIconMinimize;
