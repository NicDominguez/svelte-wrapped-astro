import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewArrayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewArray["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewArray["size"];
}
interface RuxIconViewArrayEvents {
}
interface RuxIconViewArraySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewArray extends SvelteComponent {
    $$prop_def: RuxIconViewArrayProps;
    $$events_def: RuxIconViewArrayEvents;
    $$slot_def: RuxIconViewArraySlots;
    $on<K extends keyof RuxIconViewArrayEvents>(type: K, callback: (e: RuxIconViewArrayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewArrayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewArrayElement | undefined;
}
export default RuxIconViewArray;
