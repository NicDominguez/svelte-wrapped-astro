import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWavesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWaves["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWaves["size"];
}
interface RuxIconWavesEvents {
}
interface RuxIconWavesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWaves extends SvelteComponent {
    $$prop_def: RuxIconWavesProps;
    $$events_def: RuxIconWavesEvents;
    $$slot_def: RuxIconWavesSlots;
    $on<K extends keyof RuxIconWavesEvents>(type: K, callback: (e: RuxIconWavesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWavesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWavesElement | undefined;
}
export default RuxIconWaves;
