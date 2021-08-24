import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSmsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSms["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSms["size"];
}
interface RuxIconSmsEvents {
}
interface RuxIconSmsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSms extends SvelteComponent {
    $$prop_def: RuxIconSmsProps;
    $$events_def: RuxIconSmsEvents;
    $$slot_def: RuxIconSmsSlots;
    $on<K extends keyof RuxIconSmsEvents>(type: K, callback: (e: RuxIconSmsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSmsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSmsElement | undefined;
}
export default RuxIconSms;
