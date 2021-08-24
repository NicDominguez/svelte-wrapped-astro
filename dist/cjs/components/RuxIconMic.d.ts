import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMicProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMic["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMic["size"];
}
interface RuxIconMicEvents {
}
interface RuxIconMicSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMic extends SvelteComponent {
    $$prop_def: RuxIconMicProps;
    $$events_def: RuxIconMicEvents;
    $$slot_def: RuxIconMicSlots;
    $on<K extends keyof RuxIconMicEvents>(type: K, callback: (e: RuxIconMicEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMicProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMicElement | undefined;
}
export default RuxIconMic;
