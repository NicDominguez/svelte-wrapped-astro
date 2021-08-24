import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHttpsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHttps["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHttps["size"];
}
interface RuxIconHttpsEvents {
}
interface RuxIconHttpsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHttps extends SvelteComponent {
    $$prop_def: RuxIconHttpsProps;
    $$events_def: RuxIconHttpsEvents;
    $$slot_def: RuxIconHttpsSlots;
    $on<K extends keyof RuxIconHttpsEvents>(type: K, callback: (e: RuxIconHttpsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHttpsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHttpsElement | undefined;
}
export default RuxIconHttps;
