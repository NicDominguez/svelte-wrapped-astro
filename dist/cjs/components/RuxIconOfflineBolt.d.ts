import { Components } from '@astrouxds/astro-web-components';
interface RuxIconOfflineBoltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconOfflineBolt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconOfflineBolt["size"];
}
interface RuxIconOfflineBoltEvents {
}
interface RuxIconOfflineBoltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconOfflineBolt extends SvelteComponent {
    $$prop_def: RuxIconOfflineBoltProps;
    $$events_def: RuxIconOfflineBoltEvents;
    $$slot_def: RuxIconOfflineBoltSlots;
    $on<K extends keyof RuxIconOfflineBoltEvents>(type: K, callback: (e: RuxIconOfflineBoltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconOfflineBoltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconOfflineBoltElement | undefined;
}
export default RuxIconOfflineBolt;
