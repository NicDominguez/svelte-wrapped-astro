import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWhatshotProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWhatshot["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWhatshot["size"];
}
interface RuxIconWhatshotEvents {
}
interface RuxIconWhatshotSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWhatshot extends SvelteComponent {
    $$prop_def: RuxIconWhatshotProps;
    $$events_def: RuxIconWhatshotEvents;
    $$slot_def: RuxIconWhatshotSlots;
    $on<K extends keyof RuxIconWhatshotEvents>(type: K, callback: (e: RuxIconWhatshotEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWhatshotProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWhatshotElement | undefined;
}
export default RuxIconWhatshot;
