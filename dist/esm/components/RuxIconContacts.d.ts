import { Components } from '@astrouxds/astro-web-components';
interface RuxIconContactsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconContacts["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconContacts["size"];
}
interface RuxIconContactsEvents {
}
interface RuxIconContactsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconContacts extends SvelteComponent {
    $$prop_def: RuxIconContactsProps;
    $$events_def: RuxIconContactsEvents;
    $$slot_def: RuxIconContactsSlots;
    $on<K extends keyof RuxIconContactsEvents>(type: K, callback: (e: RuxIconContactsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconContactsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconContactsElement | undefined;
}
export default RuxIconContacts;
