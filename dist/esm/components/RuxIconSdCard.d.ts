import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSdCardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSdCard["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSdCard["size"];
}
interface RuxIconSdCardEvents {
}
interface RuxIconSdCardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSdCard extends SvelteComponent {
    $$prop_def: RuxIconSdCardProps;
    $$events_def: RuxIconSdCardEvents;
    $$slot_def: RuxIconSdCardSlots;
    $on<K extends keyof RuxIconSdCardEvents>(type: K, callback: (e: RuxIconSdCardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSdCardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSdCardElement | undefined;
}
export default RuxIconSdCard;
