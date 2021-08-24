import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNotificationsOffProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNotificationsOff["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNotificationsOff["size"];
}
interface RuxIconNotificationsOffEvents {
}
interface RuxIconNotificationsOffSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNotificationsOff extends SvelteComponent {
    $$prop_def: RuxIconNotificationsOffProps;
    $$events_def: RuxIconNotificationsOffEvents;
    $$slot_def: RuxIconNotificationsOffSlots;
    $on<K extends keyof RuxIconNotificationsOffEvents>(type: K, callback: (e: RuxIconNotificationsOffEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNotificationsOffProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNotificationsOffElement | undefined;
}
export default RuxIconNotificationsOff;
