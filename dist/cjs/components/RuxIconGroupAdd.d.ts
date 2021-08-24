import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGroupAddProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGroupAdd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGroupAdd["size"];
}
interface RuxIconGroupAddEvents {
}
interface RuxIconGroupAddSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGroupAdd extends SvelteComponent {
    $$prop_def: RuxIconGroupAddProps;
    $$events_def: RuxIconGroupAddEvents;
    $$slot_def: RuxIconGroupAddSlots;
    $on<K extends keyof RuxIconGroupAddEvents>(type: K, callback: (e: RuxIconGroupAddEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGroupAddProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGroupAddElement | undefined;
}
export default RuxIconGroupAdd;
