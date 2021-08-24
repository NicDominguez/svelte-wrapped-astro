import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWbSunnyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWbSunny["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWbSunny["size"];
}
interface RuxIconWbSunnyEvents {
}
interface RuxIconWbSunnySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWbSunny extends SvelteComponent {
    $$prop_def: RuxIconWbSunnyProps;
    $$events_def: RuxIconWbSunnyEvents;
    $$slot_def: RuxIconWbSunnySlots;
    $on<K extends keyof RuxIconWbSunnyEvents>(type: K, callback: (e: RuxIconWbSunnyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWbSunnyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWbSunnyElement | undefined;
}
export default RuxIconWbSunny;
