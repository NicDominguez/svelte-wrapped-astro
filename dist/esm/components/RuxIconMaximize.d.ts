import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMaximizeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMaximize["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMaximize["size"];
}
interface RuxIconMaximizeEvents {
}
interface RuxIconMaximizeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMaximize extends SvelteComponent {
    $$prop_def: RuxIconMaximizeProps;
    $$events_def: RuxIconMaximizeEvents;
    $$slot_def: RuxIconMaximizeSlots;
    $on<K extends keyof RuxIconMaximizeEvents>(type: K, callback: (e: RuxIconMaximizeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMaximizeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMaximizeElement | undefined;
}
export default RuxIconMaximize;
