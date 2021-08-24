import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTuneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTune["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTune["size"];
}
interface RuxIconTuneEvents {
}
interface RuxIconTuneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTune extends SvelteComponent {
    $$prop_def: RuxIconTuneProps;
    $$events_def: RuxIconTuneEvents;
    $$slot_def: RuxIconTuneSlots;
    $on<K extends keyof RuxIconTuneEvents>(type: K, callback: (e: RuxIconTuneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTuneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTuneElement | undefined;
}
export default RuxIconTune;
