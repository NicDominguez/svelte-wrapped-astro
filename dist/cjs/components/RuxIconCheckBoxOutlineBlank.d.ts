import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCheckBoxOutlineBlankProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCheckBoxOutlineBlank["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCheckBoxOutlineBlank["size"];
}
interface RuxIconCheckBoxOutlineBlankEvents {
}
interface RuxIconCheckBoxOutlineBlankSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCheckBoxOutlineBlank extends SvelteComponent {
    $$prop_def: RuxIconCheckBoxOutlineBlankProps;
    $$events_def: RuxIconCheckBoxOutlineBlankEvents;
    $$slot_def: RuxIconCheckBoxOutlineBlankSlots;
    $on<K extends keyof RuxIconCheckBoxOutlineBlankEvents>(type: K, callback: (e: RuxIconCheckBoxOutlineBlankEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCheckBoxOutlineBlankProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCheckBoxOutlineBlankElement | undefined;
}
export default RuxIconCheckBoxOutlineBlank;
