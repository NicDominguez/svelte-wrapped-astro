import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPermPhoneMsgProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPermPhoneMsg["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPermPhoneMsg["size"];
}
interface RuxIconPermPhoneMsgEvents {
}
interface RuxIconPermPhoneMsgSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPermPhoneMsg extends SvelteComponent {
    $$prop_def: RuxIconPermPhoneMsgProps;
    $$events_def: RuxIconPermPhoneMsgEvents;
    $$slot_def: RuxIconPermPhoneMsgSlots;
    $on<K extends keyof RuxIconPermPhoneMsgEvents>(type: K, callback: (e: RuxIconPermPhoneMsgEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPermPhoneMsgProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPermPhoneMsgElement | undefined;
}
export default RuxIconPermPhoneMsg;
