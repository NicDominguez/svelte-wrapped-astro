import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCheckProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCheck["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCheck["size"];
}
interface RuxIconCheckEvents {
}
interface RuxIconCheckSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCheck extends SvelteComponent {
    $$prop_def: RuxIconCheckProps;
    $$events_def: RuxIconCheckEvents;
    $$slot_def: RuxIconCheckSlots;
    $on<K extends keyof RuxIconCheckEvents>(type: K, callback: (e: RuxIconCheckEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCheckProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCheckElement | undefined;
}
export default RuxIconCheck;
