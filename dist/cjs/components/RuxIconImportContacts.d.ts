import { Components } from '@astrouxds/astro-web-components';
interface RuxIconImportContactsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconImportContacts["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconImportContacts["size"];
}
interface RuxIconImportContactsEvents {
}
interface RuxIconImportContactsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconImportContacts extends SvelteComponent {
    $$prop_def: RuxIconImportContactsProps;
    $$events_def: RuxIconImportContactsEvents;
    $$slot_def: RuxIconImportContactsSlots;
    $on<K extends keyof RuxIconImportContactsEvents>(type: K, callback: (e: RuxIconImportContactsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconImportContactsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconImportContactsElement | undefined;
}
export default RuxIconImportContacts;
