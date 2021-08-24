import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEqualizerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEqualizer["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEqualizer["size"];
}
interface RuxIconEqualizerEvents {
}
interface RuxIconEqualizerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEqualizer extends SvelteComponent {
    $$prop_def: RuxIconEqualizerProps;
    $$events_def: RuxIconEqualizerEvents;
    $$slot_def: RuxIconEqualizerSlots;
    $on<K extends keyof RuxIconEqualizerEvents>(type: K, callback: (e: RuxIconEqualizerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEqualizerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEqualizerElement | undefined;
}
export default RuxIconEqualizer;
