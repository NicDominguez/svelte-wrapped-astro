import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHeadsetMicProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHeadsetMic["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHeadsetMic["size"];
}
interface RuxIconHeadsetMicEvents {
}
interface RuxIconHeadsetMicSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHeadsetMic extends SvelteComponent {
    $$prop_def: RuxIconHeadsetMicProps;
    $$events_def: RuxIconHeadsetMicEvents;
    $$slot_def: RuxIconHeadsetMicSlots;
    $on<K extends keyof RuxIconHeadsetMicEvents>(type: K, callback: (e: RuxIconHeadsetMicEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHeadsetMicProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHeadsetMicElement | undefined;
}
export default RuxIconHeadsetMic;
