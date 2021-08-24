import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettings["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettings["size"];
}
interface RuxIconSettingsEvents {
}
interface RuxIconSettingsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettings extends SvelteComponent {
    $$prop_def: RuxIconSettingsProps;
    $$events_def: RuxIconSettingsEvents;
    $$slot_def: RuxIconSettingsSlots;
    $on<K extends keyof RuxIconSettingsEvents>(type: K, callback: (e: RuxIconSettingsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsElement | undefined;
}
export default RuxIconSettings;
