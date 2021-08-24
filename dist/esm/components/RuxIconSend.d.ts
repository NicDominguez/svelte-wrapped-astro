import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSendProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSend["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSend["size"];
}
interface RuxIconSendEvents {
}
interface RuxIconSendSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSend extends SvelteComponent {
    $$prop_def: RuxIconSendProps;
    $$events_def: RuxIconSendEvents;
    $$slot_def: RuxIconSendSlots;
    $on<K extends keyof RuxIconSendEvents>(type: K, callback: (e: RuxIconSendEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSendProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSendElement | undefined;
}
export default RuxIconSend;
