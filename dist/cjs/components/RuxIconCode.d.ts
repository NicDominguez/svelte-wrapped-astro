import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCodeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCode["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCode["size"];
}
interface RuxIconCodeEvents {
}
interface RuxIconCodeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCode extends SvelteComponent {
    $$prop_def: RuxIconCodeProps;
    $$events_def: RuxIconCodeEvents;
    $$slot_def: RuxIconCodeSlots;
    $on<K extends keyof RuxIconCodeEvents>(type: K, callback: (e: RuxIconCodeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCodeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCodeElement | undefined;
}
export default RuxIconCode;
