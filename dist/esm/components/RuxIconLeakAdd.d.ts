import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLeakAddProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLeakAdd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLeakAdd["size"];
}
interface RuxIconLeakAddEvents {
}
interface RuxIconLeakAddSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLeakAdd extends SvelteComponent {
    $$prop_def: RuxIconLeakAddProps;
    $$events_def: RuxIconLeakAddEvents;
    $$slot_def: RuxIconLeakAddSlots;
    $on<K extends keyof RuxIconLeakAddEvents>(type: K, callback: (e: RuxIconLeakAddEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLeakAddProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLeakAddElement | undefined;
}
export default RuxIconLeakAdd;
