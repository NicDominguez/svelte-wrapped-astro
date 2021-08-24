import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAudiotrackProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAudiotrack["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAudiotrack["size"];
}
interface RuxIconAudiotrackEvents {
}
interface RuxIconAudiotrackSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAudiotrack extends SvelteComponent {
    $$prop_def: RuxIconAudiotrackProps;
    $$events_def: RuxIconAudiotrackEvents;
    $$slot_def: RuxIconAudiotrackSlots;
    $on<K extends keyof RuxIconAudiotrackEvents>(type: K, callback: (e: RuxIconAudiotrackEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAudiotrackProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAudiotrackElement | undefined;
}
export default RuxIconAudiotrack;
