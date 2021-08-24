import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsPhoneProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsPhone["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsPhone["size"];
}
interface RuxIconSettingsPhoneEvents {
}
interface RuxIconSettingsPhoneSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsPhone extends SvelteComponent {
    $$prop_def: RuxIconSettingsPhoneProps;
    $$events_def: RuxIconSettingsPhoneEvents;
    $$slot_def: RuxIconSettingsPhoneSlots;
    $on<K extends keyof RuxIconSettingsPhoneEvents>(type: K, callback: (e: RuxIconSettingsPhoneEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsPhoneProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsPhoneElement | undefined;
}
export default RuxIconSettingsPhone;
