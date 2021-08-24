import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMailProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMail["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMail["size"];
}
interface RuxIconMailEvents {
}
interface RuxIconMailSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMail extends SvelteComponent {
    $$prop_def: RuxIconMailProps;
    $$events_def: RuxIconMailEvents;
    $$slot_def: RuxIconMailSlots;
    $on<K extends keyof RuxIconMailEvents>(type: K, callback: (e: RuxIconMailEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMailProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMailElement | undefined;
}
export default RuxIconMail;
