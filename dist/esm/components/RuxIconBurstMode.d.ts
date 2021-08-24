import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBurstModeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBurstMode["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBurstMode["size"];
}
interface RuxIconBurstModeEvents {
}
interface RuxIconBurstModeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBurstMode extends SvelteComponent {
    $$prop_def: RuxIconBurstModeProps;
    $$events_def: RuxIconBurstModeEvents;
    $$slot_def: RuxIconBurstModeSlots;
    $on<K extends keyof RuxIconBurstModeEvents>(type: K, callback: (e: RuxIconBurstModeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBurstModeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBurstModeElement | undefined;
}
export default RuxIconBurstMode;
