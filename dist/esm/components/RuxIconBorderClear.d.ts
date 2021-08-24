import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBorderClearProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBorderClear["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBorderClear["size"];
}
interface RuxIconBorderClearEvents {
}
interface RuxIconBorderClearSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBorderClear extends SvelteComponent {
    $$prop_def: RuxIconBorderClearProps;
    $$events_def: RuxIconBorderClearEvents;
    $$slot_def: RuxIconBorderClearSlots;
    $on<K extends keyof RuxIconBorderClearEvents>(type: K, callback: (e: RuxIconBorderClearEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBorderClearProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBorderClearElement | undefined;
}
export default RuxIconBorderClear;
