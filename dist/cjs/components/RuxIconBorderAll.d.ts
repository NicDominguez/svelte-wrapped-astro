import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderAllProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderAll["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderAll["size"];
}
interface RuxIconBorderAllEvents {
}
interface RuxIconBorderAllSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderAll extends SvelteComponent {
    $$prop_def: RuxIconBorderAllProps;
    $$events_def: RuxIconBorderAllEvents;
    $$slot_def: RuxIconBorderAllSlots;
    $on<K extends keyof RuxIconBorderAllEvents>(type: K, callback: (e: RuxIconBorderAllEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderAllProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderAllElement | undefined;
}
export default RuxIconBorderAll;
