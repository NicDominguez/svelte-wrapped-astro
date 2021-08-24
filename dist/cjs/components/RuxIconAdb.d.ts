import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAdbProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAdb["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAdb["size"];
}
interface RuxIconAdbEvents {
}
interface RuxIconAdbSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAdb extends SvelteComponent {
    $$prop_def: RuxIconAdbProps;
    $$events_def: RuxIconAdbEvents;
    $$slot_def: RuxIconAdbSlots;
    $on<K extends keyof RuxIconAdbEvents>(type: K, callback: (e: RuxIconAdbEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAdbProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAdbElement | undefined;
}
export default RuxIconAdb;
