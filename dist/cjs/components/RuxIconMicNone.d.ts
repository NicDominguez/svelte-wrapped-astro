import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMicNoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMicNone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMicNone["size"];
}
interface RuxIconMicNoneEvents {
}
interface RuxIconMicNoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMicNone extends SvelteComponent {
    $$prop_def: RuxIconMicNoneProps;
    $$events_def: RuxIconMicNoneEvents;
    $$slot_def: RuxIconMicNoneSlots;
    $on<K extends keyof RuxIconMicNoneEvents>(type: K, callback: (e: RuxIconMicNoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMicNoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMicNoneElement | undefined;
}
export default RuxIconMicNone;
