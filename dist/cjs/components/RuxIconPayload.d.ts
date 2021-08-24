import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPayloadProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPayload["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPayload["size"];
}
interface RuxIconPayloadEvents {
}
interface RuxIconPayloadSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPayload extends SvelteComponent {
    $$prop_def: RuxIconPayloadProps;
    $$events_def: RuxIconPayloadEvents;
    $$slot_def: RuxIconPayloadSlots;
    $on<K extends keyof RuxIconPayloadEvents>(type: K, callback: (e: RuxIconPayloadEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPayloadProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPayloadElement | undefined;
}
export default RuxIconPayload;
