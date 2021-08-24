import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddAlertProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddAlert["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddAlert["size"];
}
interface RuxIconAddAlertEvents {
}
interface RuxIconAddAlertSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddAlert extends SvelteComponent {
    $$prop_def: RuxIconAddAlertProps;
    $$events_def: RuxIconAddAlertEvents;
    $$slot_def: RuxIconAddAlertSlots;
    $on<K extends keyof RuxIconAddAlertEvents>(type: K, callback: (e: RuxIconAddAlertEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddAlertProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddAlertElement | undefined;
}
export default RuxIconAddAlert;
