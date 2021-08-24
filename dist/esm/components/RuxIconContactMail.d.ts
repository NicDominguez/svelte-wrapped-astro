import { Components } from '@astrouxds/astro-web-components';
interface RuxIconContactMailProps {
    /** The fill color for the icon */
    color?: Components.RuxIconContactMail["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconContactMail["size"];
}
interface RuxIconContactMailEvents {
}
interface RuxIconContactMailSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconContactMail extends SvelteComponent {
    $$prop_def: RuxIconContactMailProps;
    $$events_def: RuxIconContactMailEvents;
    $$slot_def: RuxIconContactMailSlots;
    $on<K extends keyof RuxIconContactMailEvents>(type: K, callback: (e: RuxIconContactMailEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconContactMailProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconContactMailElement | undefined;
}
export default RuxIconContactMail;
